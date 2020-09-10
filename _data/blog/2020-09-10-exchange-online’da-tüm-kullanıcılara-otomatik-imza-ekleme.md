---
template: BlogPost
path: /exchange-onlineda-tum-kullanicilara-otomatik-imza-ekleme
date: 2020-09-10T14:39:28.079Z
title: Exchange Online’da Tüm Kullanıcılara Otomatik İmza Ekleme
metaDescription: |
  Exchange Online’da Tüm Kullanıcılara Otomatik İmza Ekleme
thumbnail: /assets/office365-exchange-online-logo-e1413807714984.jpg
---
Merhabalar arkadaşlar bu yazımda Exchange Online kullananlar için tüm kullanıcı listemize otomatik imza eklemeyi resimlerle göstereceğim.

İlk olarak Exchange Online yönetim bölümüne giriş yapıyoruz. Giriş yaptıktan sonra sol menüde bulunan **Posta Akışı** başlığına tıklıyoruz. Karşımıza aşağıdaki görseldeki ekran geliyor.

![Exchange Online’da Tüm Kullanıcılara Otomatik İmza Ekleme](/assets/exchange_imza1.jpg)



Üst menüde bulunan**“kurallar”**başlığına tıklıyor ve yeni**“kural oluştur”**diyoruz.



![Exchange Online’da Tüm Kullanıcılara Otomatik İmza Ekleme](/assets/exchange_imza2.jpg)



Seçeneklerimizi aşağıdaki görsel gibi ayarladıktan sonra sağ tarafta bulunan Metin girin bölümüne giriyor ve imzamızı oluşturuyoruz.

![Exchange Online’da Tüm Kullanıcılara Otomatik İmza Ekleme](/assets/exchange_imza3.jpg)

![Exchange Online’da Tüm Kullanıcılara Otomatik İmza Ekleme](/assets/exchange_imza4.jpg)



Son ekranımızın hali aşağıdaki gibi olacak. Daha sonra kaydedebiliriz. Gönderen kısmına Tüm iletileri uygula derseniz size gelen iletilerede imza koyacaktır. Bilginize. Kuralı kendinize göre ayarlayabilirsiniz.

![Exchange Online’da Tüm Kullanıcılara Otomatik İmza Ekleme](/assets/exchange_imza5.jpg)



İşinize yarayacak değişkenleri aşağıda paylaşıyorum. İmzanızda html kullanabilirsiniz.



```
%%UserLogonName%%
 
%%DisplayName%%
 
%%FirstName%%
 
%%Initials%%
 
%%LastName%%
 
%%PhoneNumber%%
 
%%OtherPhoneNumber%%
 
%%HomePhoneNumber%%
 
%%OtherHomePhoneNumber%%
 
%%PagerNumber%%
 
%%MobileNumber%%
 
%%FaxNumber%%
 
%%OtherFaxNumber%%
 
%%Email%%
 
%%Street%%
 
%%POBox%%
 
%%City%%
 
%%State%%
 
%%ZipCode%%
 
%%Country%%
 
%%Title%%
 
%%Department%%
 
%%Manager%%
 
%%Office%%
 
%%Company%%
 
%%Notes%%
```
