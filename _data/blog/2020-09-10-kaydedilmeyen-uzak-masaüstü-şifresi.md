---
template: BlogPost
path: /kaydedilmeyen-uzak-masaustu-sifresi
date: 2020-09-10T18:13:44.763Z
title: Kaydedilmeyen Uzak Masaüstü Şifresi
metaDescription: |
  Kaydedilmeyen Uzak Masaüstü Şifresi
thumbnail: /assets/remote_desktop_password.jpg
---
Merhabalar arkadaşlar. Uzak masaüstüne bağlanırken oturumunuz şifrenizi bir kaç farklı yöntem deneyip kaydetmenize rağmen sürekli şifre istemeye devam ediyorsa aşağıdaki işlemleri yapabilirsiniz.

Öncelikle win+r ile çalıştır’a girerek “gpedit.msc” yazıp Local Group Policy Editor ( Yerel Grup İlkesi Düzenleyicisi) menüsüne girmemiz gerekiyor.

Daha sonra izleyeceğimiz menüyü hem türkçe hem ingilizce paylaşıyorum.

Computer Configuration –> Administrative Templates –> System –> Credentials Delegation. Find the policy named Allow delegating saved credentials with NTLM-only server authentication;

Bilgisayar Yapılandırması –> Yönetim Şablonları –> Sistem –> Kimlik Bilgileri Yetki Aktarımları –> Yalnızca NTLM sunucu kimlik doğrulamasıyla kaydedilen kimlik bilgilerinin yetkisini aktarmaya izin ver

bölümüne girip “enable” durumuna getirdikten sonra Show butonundan listeye sunucu iplerimizi ekliyoruz.



![](/assets/kaydedilmeyen_şifre.jpg)

![](/assets/kaydedilmeyen_şifre2.jpg)
