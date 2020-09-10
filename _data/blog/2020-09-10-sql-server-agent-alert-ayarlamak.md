---
template: BlogPost
path: /sql-server-agent-alertleri-ayarlamak
date: 2020-09-10T14:58:53.516Z
title: SQL Server Agent Alert Ayarlamak
metaDescription: |
  SQL Server Agent Alert Ayarlamak
thumbnail: /assets/sql_server_alert.jpg
---
Merhabalar arkadaşlar ülkemizin Korona Virüsü ile savaştığı bu dönemlerde ben de evimden çalışmaya devam etmekteyim. Bu yazımda kendi kullandığım SQL Alert’ları sizinle paylaşmak istiyorum. Aşağıda adım adım anlatacağım. Umarım işinize yarayacaktır.

Not: Veritabanı mail konfigürasyonunu son kısımda anlatacağım.

Öncelikle Microsoft SQL Server Management Studio’yu açtıktan sonra Operatör oluşturmamız gerekiyor. Alarmların maili göndereceği operatörler…

Bunun için SQL Server Agent > Operators > New Operators sekmesinden operatörümü oluşturup çalışması gereken gün ve saat aralığını belirliyorum. Benim ki aşağıdaki görsellerdeki gibidir.

![SQL Server Agent Alert Ayarlamak](/assets/1operator.jpg)

![SQL Server Agent Alert Ayarlamak](/assets/2operators.jpg)



Bu işlemle birlikte maillerimizin gideceği operatörü oluşturmuş oluyor. Şimdi gelelim hangi durumlarda mail almak istediğimize.

Bunun için “Alert” menüsüne sağ tıklayıp “New Alert” diyoruz.

![SQL Server Agent Alert Ayarlamak](/assets/3alertnew.jpg)



Açılan alert menüsünde kullanacağınız Severity levelları bulunmaktadır. Ben burada 14,15,16,17,18,19,24 ve 25 levellerini kullanmaktayım. Her bir değerin detaylı açıklamasınıbu [linkte ](https://docs.microsoft.com/en-us/sql/relational-databases/errors-events/database-engine-error-severities?view=sql-server-ver15)bulabilirsiniz.



![SQL Server Agent Alert Ayarlamak](/assets/4hatasiddetlerix.jpg)

\
General kısmındaki ayarlamalarımızı yaptıktan sonra Response kısmında ise oluşturmuş olduğumuz operatörlerimizi işaretliyoruz.

![SQL Server Agent Alert Ayarlamak](/assets/5responsive.jpg)



Option kısmını ise ben aşağıdaki gibi ayarlıyorum.



![sql server alert](/assets/6options.jpg)



Şimdi operatörüm oluştu alarmım oluştu. Fakat bu maili gönderecek hesap ayarlarımızı yapmadık. Bunun için Management Sekmesi altında bulunan Database Mail seçeneğine sağ tıklayıp Configure Database Mail seçeneğine giriş yapıyoruz.

![](/assets/7mail.jpg)



Açılan pencerede benim mail profilimi oluşturmak için Creat New Profil seçeneğini seçiyorum. Resimleri takip edebiliriz.

![](/assets/8mail1.jpg)

![](/assets/9mail2.jpg)

![](/assets/10mail3.jpg)



New Account seçeneğine tıklayarak mail ayarlarımıza geliyoruz. Burada ben gmail kullanacağım. En önemli nokta google hesap ayarlarında “Daha az güvenli uygulama erişimi” bölümünü açık hale getirmeniz gerekiyor. Gerekli[link burada.](https://support.google.com/accounts/answer/6010255?hl=tr)

ve mail ayarlarımızı aşağıdaki gibi yapıyoruz.

![](/assets/11mail4.jpg)



Bu ayaları yaptıktan sonra database mail e sağ tıklayarak bir test maili atabilir ve gelen kutumuzu kontrol edebiliriz.

![](/assets/12testmail.jpg)

![](/assets/13testmail2.jpg)



Görüldüğü gibi mailimiz geliyor…

![](/assets/14testmail3-768x319.jpg)



Tüm bunlara ek olarak ben backup planımın hataya düştüğü zamanlardada mail almak için aşağıdaki ayarları yapıyorum. Sql Alert Agent > Job kısmından backcup planıma sağ tıklayıp özellikler bölümünden ekran görüntüsünü paylaşıyorum…

![](/assets/15job.jpg)



Hepsi bu kadar umarım işinize yarar bilgiler paylaşmışımdır. Sağlıklı ve virüssüz günler diliyorum
