---
template: BlogPost
path: /sql-server-maintenance-backup-plani
date: 2019-09-06T10:07:40.617Z
title: SQL Server Maintenance Backup Planı
metaDescription: SQL Server Maintenance Backup Planı
thumbnail: /assets/sql_server_backup.jpg
---
Merhabalar SQL serverlarda kullandığımız temel back-up yapısını göstereceğim. İlk olarak SQL Server Management Studio Explorer menüsünde Management altındaki Maintenance Plans kısmından yeni bir plan oluşturuyoruz.

![](/assets/sql1.png)



Daha sonra sol menüye oluşturacağımız Maintenance Plan Taskleri menüsünü göreceksiniz. Ben burada sırası ile **Backup Database Task – Cleanup Task – History Cleanup Task** seçeneklerini kullanıyorum. İlk adım olarak Backup Task’ini ekliyorum ve editliyorum.

![](/assets/sql2.jpg)



 **A)** Database Task menüsünde dikkate almamız gereken 3 kısımdan bahsedeceğim.

1. olarak backup alacağımız database’leri ilgili görseldeki gibi seçiyoruz. Ben burada All Database seçeneğini seçtim.
2. olarak “Backup set will expire” seçeneğinde after seçili olduğu durumda bu yedek girdiğiniz değer kadar muhafaza edilmektedir. Siz bu seçeneği kendinize göre ayarlayabilirsiniz.
3. olarak ise “Create Backup file for every database” kısmından .bak uzantılı yedeklerimizi barındıracağımız yeri seçiyoruz.

![](/assets/sql3.jpg)



**B)** Şimdi Cleanup Task seçeneğini kullanarak almış olduğumuz yedeklerimizi temizliyoruz.



![](/assets/sql4.jpg)

\
C) History Cleanup Task ilede yukarıda yapmış olduğumuz işlemler ile ilgli log dosyalarını belirlediğimiz aralıklarla temizleyecektir.

![](/assets/sql5.jpg)



D) İşlemlerimiz bu kadar ekte görüldüğü gibi birbirine bağlama işlemlerini yaptıktan sonra task’lerimizi çalıştırabiliriz. Zaman ayırdığınız için teşekkürler.Kolay gelsin.

![](/assets/sql6.jpg)
