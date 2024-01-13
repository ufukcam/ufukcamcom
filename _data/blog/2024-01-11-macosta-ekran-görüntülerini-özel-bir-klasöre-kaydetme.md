---
template: BlogPost
path: /mac-os-screenshot-path-change
date: 2024-01-11T20:19:49.285Z
title: macOS'ta Ekran Görüntülerini Özel Bir Klasöre Kaydetme
metaDescription: >-
  Ekran görüntüleri, günümüzde hemen hemen herkesin sıkça kullandığı bir
  özelliktir. macOS kullanıcıları için ekran görüntülerini belirli bir konuma,
  örneğin masaüstünde bir klasöre kaydetmek, düzen ve kolay erişim açısından
  oldukça yararlıdır. Bu blog yazısında, macOS'ta ekran görüntülerini özel
  olarak oluşturduğunuz bir klasöre nasıl kaydedebileceğinizi adım adım
  anlatacağım.
thumbnail: /assets/indir (1).jpeg
---


### Adım 1: Masaüstünde Screenshots Klasörü Oluşturma

İlk adım, ekran görüntülerinin kaydedileceği klasörü oluşturmaktır. Bu örnekte, masaüstünde "Screenshots" adında bir klasör oluşturacağız. Bunu iki şekilde yapabilirsiniz:

* Finder üzerinden manuel olarak yeni bir klasör oluşturun.
* Veya Terminal'i açıp aşağıdaki komutu kullanarak klasörü oluşturun:

  ```
  mkdir ~/Desktop/Screenshots

  ```

  ### Adım 2: Ekran Görüntüsü Kaydetme Yerini Değiştirme

  Ardından, ekran görüntülerinin bu yeni klasöre kaydedilmesi için macOS ayarlarını güncellemeniz gerekiyor. Bu işlem için Terminal'e aşağıdaki komutu girin:

  ```
  defaults write com.apple.screencapture location ~/Desktop/Screenshots

  ```

  Bu komut, ekran görüntülerinin kaydedileceği varsayılan konumu değiştirir.

  ### Adım 3: Ayarları Uygulama

  Son adım olarak, yaptığınız değişikliklerin etkinleşmesi için sistem arayüzünü yeniden başlatmanız gerekmektedir. Bunun için Terminal'e şu komutu girin:

  ```
  killall SystemUIServer

  ```

  \
  Bu komut, sistem arayüzünü yeniden başlatarak ayarlarınızın devreye girmesini sağlar.

  ### Sonuç

  Artık macOS'ta her ekran görüntüsü aldığınızda, bu görüntüler doğrudan masaüstünüzdeki "Screenshots" klasörüne kaydedilecektir. Bu yöntem, ekran görüntülerinizi düzenli bir şekilde saklamanıza ve ihtiyacınız olduğunda kolayca bulmanıza yardımcı olur.

  Ekran görüntüsü almayı sıkça kullanıyorsanız ve dosyalarınızı düzenli tutmayı tercih ediyorsanız, bu basit ayarlamalar size zaman kazandıracak ve iş akışınızı iyileştirecektir.
