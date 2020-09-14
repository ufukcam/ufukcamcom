---
template: BlogPost
path: /webpushr-ile-bildirim-gönderme
date: 2020-09-14T19:05:09.349Z
title: Webpushr ile Bildirim Gönderme
metaDescription: Webpushr ile Bildirim Gönderme
---
Merhabalar arkadaşlar, 

Webpushr hem tüm mobil cihazlar hem de bilgisayarlar için tasarlanmış basit ve ücretsiz (60K aboneye kadar) bir Push Notification sistemidir. Web sitenizdeki kampanyaları, yeni postları vs. daha önceden sitenizi ziyaret etmiş ve abone olmuş kullanıcılara bildirim mesajlarınızı gönderebilirsiniz. Şimdi sizlere tipik Webpusr kullanımını anlatmaya çalışacağım. 

## Webpushr Typical Site Kurulumu ve Yapılandırma

Öncelikle [bu linkten](https://app.webpushr.com/signup) üye olalım ve ardından bizi login sayfasına yönlendirecek. Giriş yaptıktan sonra aşağıda da görmüş olduğumuz hızlı kurulum sayfası bizi karşılayacak. Ayarlarımı aşağıdaki gibi yapıp ilerliyorum.



![](/assets/webpushr-1.png)



Ve sitemize eklememiz gereken javascript dosyasını ve eklememiz gereken kod bloğunu bize göstermekte. Linkten webpushr-sw.js dosyasını indirip sitemizin ana dizinine yüklüyoruz ve ardından diğer kod bloğunu sitemizin <head></head> tagları arasına yerleştiriyoruz. 



![webpusr push ](/assets/webpushr-2.png)



İlerlediğimizde kurulum işlemi tamamlanmış oluyor. Dashboard ekranına ilerliyoruz. 



![](/assets/webpushr-3.png)



Kurulum işlemlerimiz tamamlanmış bulunmakta. Şimdi bu ekranda özelleştirmeler yapıp push bildirimleri göndereceğiz.

İlk olarak `setup` menüsünün altındaki `Opt-In Prompts` ile başlıyorum. Bu menüde sitemizi ilk kez ziyaret eden kullanıcıları karşılayacak olan prompt ayarlarımızı yapacağız. Buradaki headline ve text alanlarını Türkçeleştirip stil ayarlarınızı isteğinize göre yapılandırabilirsiniz. 



![](/assets/webpushr-5.png)



Şimdi `Subscription Bell` menüsünden bildirimlere abone olan kullanıcılar için bildirimleri devre dışı bırakma, yeniden abone olma gibi işlemler yapılacak. Hali hazırda bir önceki abonelik bildirimini reddeden kullanıcılar içinde gösterilmeye devam edilecektir. Bu özelliği kullanmak istemezseniz Hide Subscription Bell butonu ile devre dışı bırakabilirsiniz. 



![](/assets/webpushr-7.png)

Şimdi ise `Welcome Push` Hoş geldiniz bildirimleri, ziyaretçi bildirimlerini almayı seçtikten hemen sonra gönderilir. Tercihen kullanabilirsiniz. Ben aşağıdaki gibi yapılandırdım.

![](/assets/webpushr-8.png)

## İlk Push Gönderme

Şimdi gelelim ilk push bildirimimizi göndermeye. Her hangi bir api oluşturmadığımız için manuel olarak push bildirimi göndereceğiz. Bunun için menüden `Push Notifications > Manual Push` 'a ilerliyoruz. `Create New Campaign` butonuna tıklayarak ilk bildirimimizi oluşturalım...

Aşağıya ekran görüntülerimi ekliyor ve açıklamalarımı bırakıyorum... 

`Audience` Push bildirimlerini tüm kullanıcılara mı yoksa test kullanıcılarına mı göndereceğimizi seçiyoruz. 

`Content` Bildirimimizin içeriğini isteğimize göre ayarlıyoruz. Sağ tarafta da yaptığımız değişiklikleri ön izleyebiliyoruz.

`Settings` Ayarlar başlığı altında 2 adet ayar bulunmakta. **Auto-Hide Notification:Enable** olarak kullanırsak push bildirimimiz gösterimden bir kaç saniye sonra otomatik olarak kapanacaktır. **Expire Push Automatically:True** şeklinde ayarlarsak belirlediğimiz süre sonrasında push bildirimimiz gönderimi durduracaktır. 

`Delivery` Ve teslimat kısmı. Bu kısımda anında ve planlanmış gönderimler yapabiliyorsunuz. Anında gönderim için **Instant** seçeneğini seçebilirsiniz. **Schedule** ilede gönderiminizi planlayabilirsiniz.

![Webpusr Push Natification](/assets/webpushr-9.png)

![Webpusr Push Natification](/assets/send-push1.png)

![Webpusr Push Natification](/assets/send-push2.png)

![Webpusr Push Natification](/assets/send-push-3.png)

![Webpusr Push Natification](/assets/send-push-4.png)

![Webpusr Push Natification](/assets/sended-push.png)

Tüm bu işlemlerden sonra **Send Campaign** butonuna bastığınızda bildirimleriniz gönderilmiş olacaktır. 

Örnek Windows görüntüsü :

![](/assets/send-webpusr.JPG)

Yazımın umarım faydası olmuştur. Okuduğunuz için teşekkür ederim.

[Wordpress için detaylı anlatım](https://www.greengeeks.com/tutorials/article/webpushr-push-notifications-wordpress/)
