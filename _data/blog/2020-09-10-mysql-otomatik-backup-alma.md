---
template: BlogPost
path: /mysql-otomatik-backup-alma
date: 2020-04-10T09:30:00.000Z
title: Mysql Otomatik Backup Alma
metaDescription: |
  Mysql Otomatik Backup Alma
thumbnail: /assets/mysql_backup.jpg
---
Merhabalar arkadaşlar kullanmış olduğum hazır web sunucularından xampp veya laragon üzerinde kurulmuş olan mysql veritabanlarımı otomatik yedekliyorum. Sizinde işinize yarayabilir.

Ekten indireceğiniz dosyaları C dizinine atmanız ve aşağıdaki bölümleri kendinize göre uyarlamanız yeterlidir. Sonrasında Task Scheduler ile otomatik bir görev tanımlamanız yeterlidir. Gerekli bilgileri aşağıda paylaşıyorum. 

Dosyaları indirmek için [tıklayınız.](https://drive.google.com/file/d/1SXy7caXizVoHA1p9CEzwHdoZLL2gYiAg/view?usp=sharing)

**set dbuser=**veritabanınızda tam yetkiye sahip bir kullanıcı

**set dbpass=**bu kullanıcnın şifresi

Aşağıdaki path’leri xampp kullandığım için kendime göre düzenledim. Sizde kendinize göre ayarlayabilirsiniz.

set errorLogPath=”c:\MySQLBackups\backupfiles\dumperrors.txt”

set mysqldumpexe=”C:\xampp\mysql\bin\mysqldump.exe”

set backupfldr=c:\MySQLBackups\backupfiles\

set datafldr=”C:\xampp\mysql\data”

set zipper=”c:\MySQLBackups\zip\7za.exe”

Zamanlanmış Görev Planımın Görüntüleri

1- Bu kısımda görevi çalıştırırken Windows üzerindeki bu işlemi yapacak olan kullanıcıyı seçmeniz gerekiyor.

![](/assets/swtp2.jpg)



2- Bu kısımda ise yedeklememizin zamanını seçiyoruz.

![](/assets/1.jpg)



3- Burada çalıştıracağımız batch file’ı seçmeniz yeterli olacaktır.

![](/assets/2.jpg)
