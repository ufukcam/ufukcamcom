---
template: BlogPost
path: /sql-server-maintenance-backup-plani
date: 2019-09-06T10:07:40.617Z
title: SQL Server Maintenance Backup Planı
metaDescription: SQL Server Maintenance Backup Planı
thumbnail: /assets/sql_server_backup.jpg
---
Merhabalar SQL serverlarda kullandığımız temel back-up yapısını göstereceğim. İlk olarak SQL Server Management Studio Explorer menüsünde Management altındaki Maintenance Plans kısmından **Maintenance Plan Wizard**'ı açıyoruz.

![sql-server-backup-planı](/assets/sql1.png)

Daha sonra next diyerek devam ediyoruz. Karşımıza gelen bölümde planımıza bir isim veriyor ve **"Single schedula for the entire plan or no schedule"** seçip planımızı belirlediğimiz zamanlarda tekrar etmesini istediğimizi belirtiyoruz. Bunu Change kısmında gerçekleştirebiliyoruz. Ben günlük olarak ayarlıyorum.

![sql-server-backup-planı](/assets/sql2.png)

![sql-server-backup-planı](/assets/sql3.png)

Devam ederek karşımıza çıkan seçeneklerde ne yapacağımızı belirliyoruz. Burada full backup alacağımız için **"Back Up Database (Full)"** seçeneği ile devam ediyoruz.

![sql-server-backup-planı](/assets/sql4.png)

\
Sıradaki bölümde **General** tabında Database bölümünden yedeklenecek databaseleri seçebiliriz. 

![sql-server-backup-planı](/assets/sql5.png)

**Destination** tabında ise seçtiğimiz databaselerin nereye yedekleneceğini belirliyoruz. **"Create a backup file for every database"** bölümünden.

![sql-server-backup-planı](/assets/sql6.png)

Options tabında ise **"Backup set wil expire"** süremizi belirleyebilir ve teknik ayarlamalar yapabiliriz. 

![sql-server-backup-planı](/assets/sql6.5.png)

Artık planımız hazır kaydedebiliriz!

![sql-server-backup-planı](/assets/sql7.png)

Ek olarak ben Cleanup tasklarımıda ekledim. İsteğe göre ekleyebilirsiniz. 

![sql-server-backup-planı](/assets/sql8.png)

![](/assets/sql9.png)

Son dizaynım bu şekilde. Esen kalın.

![](/assets/endsql.png)
