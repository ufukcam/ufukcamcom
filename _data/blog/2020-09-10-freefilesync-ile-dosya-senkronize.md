---
template: BlogPost
path: /freefilesync-ile-dosya-senkronize
date: 2020-05-20T12:06:00.000Z
title: FreeFileSync ile Dosya Senkronize
metaDescription: |
  FreeFileSync ile Dosya Senkronize
thumbnail: /assets/dosya_senkronizasyonu.JPG
---
Merhabalar arkadaşlar. Dosya ve klasörleriniz ücretsiz olarak eşitlemek için kullanabileceğiniz harika bir program. FreeFileSync ile istediğiniz anda veya belirlediğiniz tarih zamanda otomatik olarak senkronize işlemini gerçekleştirebilir ve tuttuğu loglardan sonuçlarına bakabilirsiniz. İstediğiniz ve istemediğiniz dosya uzantılarını seçebilirsiniz, eşitleme işlemine dahil edebilir veya çıkartabilirsiniz. Oldukça basit olan bu program Windows, MacOS ve Linux platformlarında çalışmaktadır.

Program indirme linki:<https://freefilesync.org/download.php>

Ben file server’ım üzerindeki tüm dosyaları başka bir sunucuya aktarmak için kullanıyorum. Ekran görüntülerimi sizlere aşağıda paylaşıyorum.

![](/assets/freefilesync.jpg)



1.Bu kısım programın ilk açılış ekranıdır. Sol taraf karşılaştıracağınız (compare ) kısmı. Yani ana dosyalarınızın bulunduğu dizin.

2.Sağ taraf ise senkronizenizi alacağınız bölümdür. Ben networkümdeki paylaşıma açtığım başka bir sunucuya senkronize yaptıracağım.

Tüm yolları seçtikten sonra Compare butonunun sağ tarafındaki ayarlar butonuna basarak görsellerdeki gibi ayarlarımızı yapabiliriz.

![](/assets/freefilesync2.jpg)



Bu kısımda tarih ve saate göre senkronize yapacağımı belirtiyorum.

![](/assets/freefilesync3.jpg)



Bu kısımda senkronize işlemime dahil olmayacak dosya uzantılarını ekliyorum. Show Examples butonuna tıklayarak örnek uzantılara ulaşabilirsiniz.

![](/assets/freefilesync4.jpg)



Bu kısımda ise ben mirror seçeneğini kullanıyorum. Karşı sunucum ile kendi sunucumu birebir ayna görevi görerek eşitliyor. Delete files bölümünde Recycle bin seçerek silinen öğeleri çöp kutusuna gönderiyoruz. Daha sonra loglarımızı tutacağımız yolu seçerek işlemi kaydediyoruz. Tüm bunları bitirdikten sonra senkronize işlemine başlayabilirsiniz. Fakat ben bu işlemi Task Scheduler ile yapacağım. En sevdiğim yanı ise FreeFileSync bu işlem için size bir batch file oluşturuyor.



![](/assets/freefilesync5.jpg)



Tüm senaryomuzu hazırladıktan sonra ana ekranda bulunan resimdede işaretlediğim “Save as batch job” butonuna basıyoruz.



![](/assets/freefilesync6.jpg)



Karşımıza çıkan bu ekranda ekranda görüldüğü gibi istediğimiz aksiyonları işaretliyor ve batch dosyamızı kaydediyoruz. Artık FreeFileSyns programındaki işlerimiz bu kadar şimdi Windows + R ile çalıştıra girerek taskschd.msc yazıp görev zamanlayıcısı menüsüne giriyoruz.



![](/assets/newtask-768x288.jpg)



Boş alanda sağ tıklayıp yeni task oluşturma butonuna tıklıyoruz ve aşağıdaki adımları izliyoruz.



![](/assets/task2.jpg)



Bu kısımda işleminize akılda kalıcı bir ad veriyorsunuz ve bu işlemi yaparken kullanacağı user ı seçiyoruz. Dikkat etmeniz gereken kısım kullanıcınızın oluşturduğunuz klasörde tam yetkili olması gerekmektedir.



![](/assets/task3-768x401.jpg)



Daha sonra Triggers (tetikleyiciler) kısmına gelerek bu görevin hangi aralıklarla çalışacağını belirliyoruz. Ben daily (günlük) olarak seçeceğim. Tama diyip diğer sekmeye geçiyoruz.



![](/assets/task4.jpg)



Actions (eylemler) sekmesinde bu görev için çalıştıracağımız programı seçiyoruz. Aynen görseldeki gibi Program kısmına FreeFileSync programımızın kurulu olduğu dizindeki .exe halini seçiyor ve Add Arguments (bağımsız değişken) kısmına ise tırnak içinde oluşturduğumuz batch file yolunu yazıyoruz. Benimki aşağıdaki şekilde.

```
"C:\FileSync\FSBAckup.ffs_batch"
```



Daha sonra bütün herşeyi kaydettiğimizde seçtiğimiz tarih ve zamanda senkronize işlemimiz başlamış olacaktır. 

https://freefilesync.org/manual.php?topic=schedule-batch-jobs
