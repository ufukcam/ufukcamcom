---
template: BlogPost
path: /active-directory-saatimizi-public-olarak-ayarlama/
date: 2019-05-29T09:58:00.000Z
title: Active Directory Saatimizi Public Olarak Ayarlama
metaDescription: |
  Active Directory Saatimizi Public Olarak Ayarlama
thumbnail: /assets/active_directory.jpg
---
AD’e PDC rolü olan sunucumuz Time Server olarak hizmet vermektedir. Bu sunucumuz saatini default’ta biostan almaktadır. BIOS saatinden gelen sunuculardaclient’larınızda veya domain ortamızda saat ayarlarında problemler yaşayabilirsiniz veya kullandığınız programlarda sıkıntılar yaşatabilir. Bunun için bu yazımızda bunu public bir time server’dan aldıracağız.

Öncelikle Power Shell komut satırını yönetici olarak çalıştırıyoruz ve aşağıda vermiş olduğum komutu yazıyoruz. Bu komut ile şuanda Saat’i nereden çektiğini bize söylecektir.

![](/assets/saat-300x54.png)



```
W32tm /query /source

```



Bu komut satırından sonra ekrana Local CMOS Clock sonucunu görmelisiniz. Biz şimdi zaman ayarımızı 4 farklı time server’dan çektirmek için gereken ayarı yapacağız. Önce[bu adresten](https://www.pool.ntp.org/zone/tr) zaman sunucumuzu seçtikten sonra aşağıdaki komutları uyguluyoruz.

```
w32tm.exe /config /manualpeerlist:”0.tr.pool.ntp.org 1.tr.pool.ntp.org 
2.tr.pool.ntp.org 3.tr.pool.ntp.org” /syncfromflags:manual /reliable:YES /update
```



Bu ayarı yaptıktan sonra time serverisini restart etmemiz yeterli olacaktır.

```
restart-Service w32time

```



Tekrar sorgulama işlemini yaptığınızda seçmiş olduğunu time serverları göreceksiniz.

PDC rolü olan sunucunuz hakkında bilginiz yok ise aşağıdaki komutu uygulayarak bu sunucunuzu öğrenebilirsiniz.

```
$forest = [System.DirectoryServices.ActiveDirectory.Forest]::GetCurrentForest()
$forest.RootDomain.PdcRoleOwner.Name
```
