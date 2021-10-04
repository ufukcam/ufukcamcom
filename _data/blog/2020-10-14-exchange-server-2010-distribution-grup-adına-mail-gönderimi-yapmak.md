---
template: BlogPost
path: /distribution-grup-adına-mail-gönderimi-yapmak
date: 2020-10-14T10:21:11.971Z
title: Exchange Server 2010 - Distribution Grup Adına Mail Gönderimi Yapmak
metaDescription: >-
  Exchange Server 2010 da oluşturduğunuz distribution grupları adına mail
  gönderimi ayarlarınızı yapmak için ufak bir not.
thumbnail: /assets/exchange-server.jpg
---
Merhabalar arkadaşlar. Oluşturduğumuz Distribution Grup üyeleri bazen bu grup adına mail gönderimi yapmak isteyebiliyorlar. Bu işlemi Exchange Management Shell ile yapmayı göstereceğim. Elimden geldiğince :)

Shell konsolumuzu açtıktan sonra bu işlemi yapacağımız grubun özelliklerini getiriyor ve inceliyoruz. Bunu aşağıdaki shell komutu ile yapabiliriz.

```
Get-DistributionGroup testufuk | Format-List  
```

Eğer grup üyelerininin yada tüm gurubun mail gönderimine ile ilgili yetki durumu **GrantSendOnBehalfTo** alanında gözükecektir. Şuanda burası boş geliyor, herhangi bir işlem yapmadık.

![exchange-server-2010](/assets/exchange1.png)

Şimdi testufuk grubundaki ufuk.cam üyesinin bu grup adına mail gönderimi yapmasına izin verelim oluyoruz

```
Set-DistributionGroup "testufuk" –GrantSendOnBehalfTo ufuk.cam
```

Tekrardan kontrol ettiğimizde gördüğünüz gibi ufuk.cam kullanıcısı yetkilendirilmiş oluyor.

![](/assets/exchange2.jpg)

Tüm grup üyelerine bu yetkiyi vermek istiyorsak aşağıdaki gibi yapılandırabiliriz.

```
Set-DistributionGroup "testufuk" -GrantSendOnBehalfTo testufuk
```

Böylelikle bu kısımdaki işlemlerimizi bitirmiş oluyoruz. Şimdi tek yapmamız gereken outlook üzerinde mail gönderirken **Kimden** bölümüne grup mailimizi eklemek.

![](/assets/outlook-tarafi.JPG)

![](/assets/ornek.jpg)

Tüm işlemler bu kadar, umarım işinize yaramıştır. Sevgiler.\
\
Not: Eğer domain forest yapınızda aynı alias'a sahip başka gruplar varsa tam grup adresini belirtebilirsiniz.
