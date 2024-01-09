---
template: BlogPost
path: /appwrite-nedir
date: 2024-01-09T19:50:59.773Z
title: Bulunmaz bir nimet Appwrite nedir?
metaDescription: >-
  Appwrite, geliştiricilerin uygulamaları için arka uç hizmetleri ve API'ler
  oluşturmasını kolaylaştıran açık kaynaklı bir Backend-as-a-Service (BaaS)
  platformudur.
thumbnail: /assets/dashboard.png
---


## Appwrite Nedir?

Appwrite, geliştiricilerin uygulamaları için arka uç hizmetleri ve API'ler oluşturmasını kolaylaştıran açık kaynaklı bir Backend-as-a-Service (BaaS) platformudur. Web, mobil ve Flutter gibi çeşitli platformlar için destek sunar. Appwrite, veritabanı, kullanıcı kimlik doğrulama, gerçek zamanlı bildirimler, depolama ve daha fazlası gibi temel arka uç işlevlerini sağlar. Bu, geliştiricilerin uygulama geliştirme sürecinde tekrar eden görevleri azaltmalarına ve daha inovatif özelliklere odaklanmalarına olanak tanır.

## Kullanım Senaryoları

1. **Mobil ve Web Uygulamaları**: Appwrite, mobil ve web uygulamaları için kullanıcı kimlik doğrulama, veritabanı yönetimi ve dosya depolama gibi temel özellikler sağlar.
2. **Çok Platformlu Uygulamalar**: Flutter gibi çapraz platform araçları ile entegre olarak, geliştiriciler aynı arka uç hizmetlerini birden fazla platformda kullanabilirler.
3. **Gerçek Zamanlı Uygulamalar**: Anlık mesajlaşma uygulamaları veya canlı veri güncellemeleri gerektiren diğer uygulamalar için Appwrite, gerçek zamanlı veritabanı güncellemelerini destekler.
4. **Oyun Geliştirme**: Oyun geliştiriciler, kullanıcı kimlik doğrulama, skor tabloları ve sosyal özellikler için Appwrite'ı kullanabilir.

## Kurulum Süreci

1. **Ön Koşullar**: Appwrite'ı kurmadan önce Docker gibi belirli araçların sisteminizde yüklü olması gerekir.
2. **Docker ile Kurulum**: Appwrite, Docker üzerinden kolayca kurulabilir. Docker komutları ile Appwrite'ın en son sürümünü indirip çalıştırabilirsiniz.
3. **Yapılandırma**: Kurulum tamamlandıktan sonra, Appwrite konsoluna erişerek projenizi oluşturabilir ve API anahtarlarınızı alabilirsiniz.
4. **SDK'ları Entegre Etme**: Uygulamanızın geliştirme aşamasında, Appwrite SDK'larını kullanarak arka uç hizmetlerine erişim sağlayabilirsiniz.\
   \
   İşte Appwrite hakkında daha fazla bilgi edinmek için faydalı bazı linkler:

   1. **Appwrite Ana Sayfası**: Genel bir bakış ve başlangıç noktası için Appwrite'ın resmi web sitesi [Appwrite Ana Sayfası](https://appwrite.io/).
   2. **React ile Başlama Kılavuzu**: React projelerinizde Appwrite kullanmaya başlamak için bu [kılavuz](https://appwrite.io/docs/quick-starts/react) yararlı olacaktır.
   3. **Flutter ile Başlama Kılavuzu**: Flutter ile Appwrite'ı kullanmaya başlamak için bu [kılavuz](https://appwrite.io/docs/quick-starts/flutter) işinize yarayabilir.
   4. **Appwrite'ı Linode'da Dağıtma**: Appwrite'ı Linode üzerinde nasıl dağıtabileceğinizi öğrenmek için bu [Linode Dokümantasyonu](<>) sayfasına göz atabilirsiniz.
   5. **React ile Kullanıcı Kimlik Doğrulaması Kurma**: React uygulamanızda Appwrite kullanarak kullanıcı kimlik doğrulama işlevselliği eklemek için bu [blog yazısı](<>) faydalı bilgiler sunmaktadır.

   Bu kaynaklar, Appwrite ile ilgili daha ayrıntılı bilgi sağlamak ve projenizde nasıl kullanabileceğinize dair fikirler vermek için harika başlangıç noktalarıdır.\
   \
   **B﻿onus APPWRITE AUTH UI**\
   \
   Appwrite AuthUI, aslında bir giriş yapma ve kayıt olma ekranı setidir. Diyelim ki bir uygulama yapıyorsunuz ve insanların uygulamanıza üye olmasını, giriş yapmasını istiyorsunuz. İşte bu durumda AuthUI devreye giriyor. AuthUI, kullanıcılara e-posta ve şifreyle ya da Facebook, Google gibi hesaplarını kullanarak giriş yapma imkanı sunar.

   Bu sistem, uygulama geliştiricilerine büyük kolaylık sağlar. Çünkü giriş yapma ve kayıt olma gibi ekranları sıfırdan tasarlamak yerine, Appwrite AuthUI bu ekranları hazır olarak sunar. Böylece geliştiriciler, bu ekranları uygulamalarına hızlıca ekleyebilir ve daha çok uygulamanın diğer kısımlarına odaklanabilirler.

   Bonus olarak, AuthUI'nin güzel bir yanı da özelleştirilebilir olması. Yani, uygulamanızın tasarımına ve markanıza uygun şekilde bu giriş yapma veya kayıt olma ekranlarını değiştirebilirsiniz. Bu, uygulamanızın genel görünümüyle uyumlu ve profesyonel bir deneyim sunmanıza yardımcı olur.

   Kısacası, Appwrite AuthUI, uygulama geliştiricilerine zaman kazandıran, kullanıcı kayıt ve giriş işlemlerini kolaylaştıran bir araçtır. Bu sayede, geliştiriciler daha önemli işlevler üzerinde çalışmak için daha fazla zaman bulabilirler.

   şte Appwrite AuthUI ile ilgili bazı faydalı kaynaklar:

   1. **Appwrite Authentication Genel Bakış**: Appwrite'ın kullanıcı kaydı ve girişi dahil olmak üzere çeşitli kimlik doğrulama yöntemlerini nasıl sağladığına dair genel bir bakış için bu [bağlantıya](https://appwrite.io/docs/products/auth) göz atabilirsiniz.
   2. **Appwrite Authentication ile Başlama Kılavuzu**: Appwrite Authentication ile hızlı bir şekilde başlamak için bu [başlangıç kılavuzunu](https://appwrite.io/docs/products/auth/quick-start) inceleyebilirsiniz.
   3. **OAuth 2 Login - Appwrite**: OAuth 2 kullanarak kullanıcıların diğer popüler hizmetlerdeki hesaplarıyla giriş yapmasını sağlamak için bu [döküman](https://appwrite.io/docs/products/auth/oauth) yararlı olacaktır.
   4. **Appwrite Hesaplar - Kullanıcı Kaydı ve Girişi**: Appwrite Hesap API'sinin nasıl kullanılacağı ve kullanıcı tercihlerinin nasıl yönetileceği hakkında bilgi için bu [sayfayı](https://appwrite.io/docs/products/auth/accounts) ziyaret edebilirsiniz.
