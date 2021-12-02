---
template: BlogPost
path: /exchange-2010-pst-export
date: 2021-12-02T09:15:07.363Z
title: Exchange Server 2010 - Mailbox Export .PST
metaDescription: Exchange Server'da pst uzantılı export işlemi nasıl yapılır?
---
Merhabalar arkadaşlar bu yazımda sizlere bir mailbox'ı .pst halini nasıl export edebileceğimizi göstereceğim. 

İlk olarak yönetici olarak Exchange PowerShell'i açıyoruz. Ardından işlemi yapacak olan kullanıcıya export yapabilmesi için yetki vermemiz gerekmekte. Bunun için aşağıdaki kodu kullanabilirsiniz. Ben kendi kullanıcıma yetki veriyorum ve çıktısını paylaşıyorum. <br>

```powershell
New-ManagementRoleAssignment –Role “Mailbox Import Export” –User ufuk.cam
```

<br>

![Exchange 2010](/assets/exhange-2010-ufukcam.png)

<br>

Yetki işlemini tamamladıktan sonra artık export işlemini başlatabiliriz. Bunun için gerekli kod'u aşağıda paylaşıyorum. 

<br>

```powershell
New-MailboxExportRequest -Mailbox ufuk.cam -FilePath “\\computername\Users\ufuk.cam\Desktop\ufukcam.pst”
```

<br>

Burada ben -FilePath olarak yine exchange sunucumun içindeki bir klasörü belirtiyorum. Eğer network üzerinde bir konuma export etmek istiyorsanız o klasöre "Exchange Trusted Subsystem" için tam yetki atamalısınız. Bu işlemi yaptıktan sonra export işleminiz başlamış olacaktır. Eğer durumunu kontrol etmek istiyorsanız aşağıdaki kodu kullanabilirsiniz. <br>

```powershell
Get-MailboxExportRequest | Get-MailboxExportRequestStatistics
```

Export işlemi başarı ile gerçekleşti. Bu export işlemlerini Exchange 2007 ve üzeri versiyonlarda kullanabilirsiniz.

Sağlıklı günler dilerim 😊
