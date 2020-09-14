---
template: BlogPost
path: /webpushr-ile-bildirim-gönderme
date: 2020-09-14T19:05:09.349Z
title: Webpushr ile Bildirim Gönderme
metaDescription: Webpushr ile Bildirim Gönderme
---
Merhabalar arkadaşlar, 

Webpushr hem tüm mobil cihazlar hem de bilgisayarlar için tasarlanmış basit ve ücretsiz (60K aboneye kadar) bir Push Notification sistemidir. Web sitenizdeki kampanyaları, yeni postları vs. daha önceden sitenizi ziyaret etmiş ve abone olmuş kullanıcılara bildirim mesajlarınızı gönderebilirsiniz. Şimdi sizlere tipik Webpusr kullanımını anlatmaya çalışacağım. 

## Webpushr Typical Site Kurulumu

Öncelikle [bu linkten](https://app.webpushr.com/signup) üye olalım ve ardından bizi login sayfasına yönlendirecek. Giriş yaptıktan sonra aşağıda da görmüş olduğumuz hızlı kurulum sayfası bizi karşılayacak.

![](/assets/webpushr-1.jpg)

Aşağıdaki gibi ayarlarımı yapıp ilerliyorum. 

![](/assets/webpushr-2.jpg)

Ve sitemize eklememiz gereken javascript dosyasını ve eklememiz gereken kod bloğunu bize göstermekte. Linkten webpushr-sw.js dosyasını indirip sitemizin ana dizinine yüklüyoruz ve ardından diğer kod bloğunu sitemizin <head></head> tagları arasına yerleştiriyoruz. 

![](/assets/webpushr-3.jpg)

İlerlediğimizde kurulum işlemi tamamlanmış oluyor. Dashboard ekranına ilerliyoruz. 

![](/assets/webpushr-4.jpg)

Kurulum işlemlerimiz tamamlanmış bulunmakta. Şimdi bu ekranda özelleştirmeler yapıp push bildirimleri göndereceğiz.

İlk olarak `setup` menüsünün altındaki `Opt-In Prompts` ile başlıyorum. Bu menüde sitemizi ilk kez ziyaret eden kullanıcıları karşılayacak olan prompt ayarlarımızı yapacağız. Buradaki headline ve text alanlarını Türkçeleştirip stil ayarlarınızı isteğinize göre yapılandırabilir siniz. 

![](/assets/webpushr-6.jpg)

Şimdi `Subscription Bell` menüsünden bildirimlere abone olan kullanıcılar için bildirimleri devre dışı bırakma, yeniden abone olma gibi işlemler yapılacak. Hali hazırda bir önceki abonelik bildirimini reddeden kullanıcılar içinde gösterilmeye devam edilecektir. Bu özelliği kullanmak istemezseniz Hide Subscription Bell butonu ile devre dışı bırakabilirsiniz. 

![](/assets/webpushr-7.png)
