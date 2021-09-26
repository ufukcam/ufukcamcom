---
template: BlogPost
path: /active-directoryde-sifre-sureleri-dolan-kullanicilara-hatirlatma-maili
date: 2020-02-04T11:36:31.824Z
title: AD’de Şifre Süreleri Dolan Kullanıcılara Hatırlatma Maili
metaDescription: |
  Active Directory’de Şifre Süreleri Dolan Kullanıcılara Hatırlatma Maili
thumbnail: /assets/active_directory_hatirlatma_maili.png
---
Merhabalar arkadaşlar. Epeydir herhangi bir şeyler paylaşamadım. Bir evlilik serüvenim vardı. Çok şükür sorunsuz atlattık. Bugün sizlere Active Directory kullanan arkadaşlarım için şifre süreleri dolan kullanıcılara mail gönderebilme imkanını paylaşacağım.

Hazırlanmış olan satırları açıklayayım

$SMTPHost = mail gönderimi yapacağınız sunucuyu yazınız.

$FromEMail = Gönderimi yapan email adresiniz yazabilirsiniz.

$expireindays = 3 gün olarak yazdım. Şifresinin sona ermesine 3 gün kalan kullanıcılar için mail gönderimi yapacak.

$DirPath = bu kısıma loğlarınızı aldıracağınız dizini yazabilirsiniz.

$mailmessage.Body= Gönderilecek olan E-mail içeriğini kendime göre düzenledim.

Bu yaptığımız dosyayı .ps1 olarak kaydedip power Shell ile çalıştırdıktan sonra yapılan işlemleri adım adım göreceksiniz. Dikkatli olmanız gereken kısım çok fazla kullanıcınız mevcut ise dosyanızı dikkatlice hazırlamanızı öneririm.

Bu işlemi otomatik yapılması içinde ben Görev zamanlayıcımdan belirli aralıklarla yaptırmayı tercih ettim. Sizde kendinize göre bir çözüm bulabilirsiniz. Bu işlemi yapan ücretli veya ücretsiz programlar mevcut fakat en temiz yolun bu olacağını düşünüyorum.

Ziyaretiniz için teşekkürler. İyi kalın.

thanks #thelazyadmin

```powershell
#VARs
#SMTP Host
$SMTPHost = "xxxx.xxx.com"
#Who is the e-mail from
$FromEmail = "xxx@xxx.com"
#Password expiry days
$expireindays = 3
#Program File Path
$DirPath = "C:\Automation\PwExpire"
$Date = Get-Date
#Check if program dir is present
$DirPathCheck = Test-Path -Path $DirPath
If (!($DirPathCheck))
{
Try
{
#If not present then create the dir
New-Item -ItemType Directory $DirPath -Force
}
Catch
{
$_ | Out-File ($DirPath + "\" + "Log.txt") -Append
}
}
#CredObj path
$CredObj = ($DirPath + "\" + "EmailExpiry.cred")
#Check if CredObj is present
$CredObjCheck = Test-Path -Path $CredObj
If (!($CredObjCheck))
{
"$Date - INFO: creating cred object" | Out-File ($DirPath + "\" + "Log.txt") -Append
#If not present get office 365 cred to save and store
$Credential = Get-Credential -Message "Please enter your Office 365 credential that you will use to send e-mail from $FromEmail. If you are not using the account $FromEmail make sure this account has 'Send As' rights on $FromEmail."
#Export cred obj
$Credential | Export-CliXml -Path $CredObj
}
Write-Host "Importing Cred object..." -ForegroundColor Yellow
$Cred = (Import-CliXml -Path $CredObj)
# Get Users From AD who are Enabled, Passwords Expire and are Not Currently Expired
"$Date - INFO: Importing AD Module" | Out-File ($DirPath + "\" + "Log.txt") -Append
Import-Module ActiveDirectory
"$Date - INFO: Getting users" | Out-File ($DirPath + "\" + "Log.txt") -Append
$users = Get-Aduser -properties Name, PasswordNeverExpires, PasswordExpired, PasswordLastSet, EmailAddress -filter { (Enabled -eq 'True') -and (PasswordNeverExpires -eq 'False') } | Where-Object { $_.PasswordExpired -eq $False }
$maxPasswordAge = (Get-ADDefaultDomainPasswordPolicy).MaxPasswordAge
# Process Each User for Password Expiry
foreach ($user in $users)
{
$Name = (Get-ADUser $user | ForEach-Object { $_.Name })
Write-Host "Working on $Name..." -ForegroundColor White
Write-Host "Getting e-mail address for $Name..." -ForegroundColor Yellow
$emailaddress = $user.emailaddress
If (!($emailaddress))
{
Write-Host "$Name has no E-Mail address listed, looking at their proxyaddresses attribute..." -ForegroundColor Red
Try
{
$emailaddress = (Get-ADUser $user -Properties proxyaddresses | Select-Object -ExpandProperty proxyaddresses | Where-Object { $_ -cmatch '^SMTP' }).Trim("SMTP:")
}
Catch
{
$_ | Out-File ($DirPath + "\" + "Log.txt") -Append
}
If (!($emailaddress))
{
Write-Host "$Name has no email addresses to send an e-mail to!" -ForegroundColor Red
#Don't continue on as we can't email $Null, but if there is an e-mail found it will email that address
"$Date - WARNING: No email found for $Name" | Out-File ($DirPath + "\" + "Log.txt") -Append
}
}
#Get Password last set date
$passwordSetDate = (Get-ADUser $user -properties * | ForEach-Object { $_.PasswordLastSet })
#Check for Fine Grained Passwords
$PasswordPol = (Get-ADUserResultantPasswordPolicy $user)
if (($PasswordPol) -ne $null)
{
$maxPasswordAge = ($PasswordPol).MaxPasswordAge
}
$expireson = $passwordsetdate + $maxPasswordAge
$today = (get-date)
#Gets the count on how many days until the password expires and stores it in the $daystoexpire var
$daystoexpire = (New-TimeSpan -Start $today -End $Expireson).Days
If (($daystoexpire -ge "0") -and ($daystoexpire -lt $expireindays))
{
"$Date - INFO: Sending expiry notice email to $Name" | Out-File ($DirPath + "\" + "Log.txt") -Append
Write-Host "Sending Password expiry email to $name" -ForegroundColor Yellow
$SmtpClient = new-object system.net.mail.smtpClient
$MailMessage = New-Object system.net.mail.mailmessage
#Who is the e-mail sent from
$mailmessage.From = $FromEmail
#SMTP server to send email
$SmtpClient.Host = $SMTPHost
#SMTP SSL
$SMTPClient.EnableSsl = $true
#SMTP credentials
$SMTPClient.Credentials = $cred
#Send e-mail to the users email
$mailmessage.To.add("$emailaddress")
#Email subject
$mailmessage.Subject = "Şifreniz $daystoexpire gün sonra sona erecek."
#Notification email on delivery / failure
$MailMessage.DeliveryNotificationOptions = ("onSuccess", "onFailure")
#Send e-mail with high priority
$MailMessage.Priority = "High"
$mailmessage.Body =
"Sevgili $Name
Bilgisayar kullanım ve mail şifrenizin süresi dolmak üzeredir. Lütfen mümkün olan en kısa sürede değiştirin.
Şifrenizi değiştirmek için aşağıdaki yöntemi takip edin:
1. Windows bilgisayarınızda
a. Ofiste değilseniz, oturum açın ve VPN'e bağlanın.
b. Her zamanki gibi bilgisayarınıza giriş yapın ve internete bağlı olduğunuzdan emin olun.
c. Ctrl-Alt-Del tuşlarına basın ve "" Şifreyi Değiştir "" üzerine tıklayın.
d. Eski şifrenizi girin ve yeni bir şifre belirleyin.
it@xxx.com"
Write-Host "Sending E-mail to $emailaddress..." -ForegroundColor Green
Try
{
$smtpclient.Send($mailmessage)
}
Catch
{
$_ | Out-File ($DirPath + "\" + "Log.txt") -Append
}
}
Else
{
"$Date - INFO: Password for $Name not expiring for $daystoexpire days" | Out-File ($DirPath + "\" + "Log.txt") -Append
Write-Host "Password for $Name does not expire for $daystoexpire days" -ForegroundColor White
}
}
```
