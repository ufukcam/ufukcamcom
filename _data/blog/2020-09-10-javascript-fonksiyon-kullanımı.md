---
template: BlogPost
path: /javascript-fonksiyon-kullanimi-evdekal
date: 2020-09-10T17:10:38.514Z
title: JavaScript Fonksiyon Kullanımı
metaDescription: |
  JavaScript Fonksiyon Kullanımı
thumbnail: /assets/fonk-banner.jpg
---
Merhabalar arkadaşlar. Bu yazımda JavaScript’te fonksiyon kullanımını kısa ve basit şekilde anlatmaya çalışacağım. Umarım faydalı olur.

Fonksiyonlar tüm programlama dillerinde olduğu gibi belirlediğimiz bir işlevi yapmakla yükümlüdür. Projelerimizde çok fazla kullanacağımız işlemlerde fonksiyonlarımız hayat kurtaracaktır.

Şimdi JavaScript’te hazır fonksiyonların dışında kendi fonksiyonlarımızıda oluşturacağız. Ben aşağıdaki gibi bir fonksiyon oluşturuyorum.

```javascript
function nameSurname (name,surname) {
    console.log(`Adı: ${name} Soyadi: ${surname}`)
}
nameSurname("Ufuk","Çam");
// Adı: Ufuk Soyadi: Çam
```

![](/assets/functions_js-768x206.jpg)



Burada belirlediğimiz ***nameSurname*** fonksiyonuma iki adet ***name,surname*** parametrelerini atıyorum. Daha sonra süslü parantezlerimizin içine ise çalıştıracağımız bölümü yazıyoruz.

Şimdi fonksiyonumuza değer verip çağırıyorum.(function call) Bu değerlerin herbirine ***Argüman*** denir.

```
Adı: Ufuk Soyadi: Çam

```



şeklinde bir çıktı alıyorum.

Eğer fonksiyonumu ***nameSurname();*** şeklinde değer vermeyip çağırırsam aşağıdaki gibi bir sonuç almaktayım.



```
Adı: undefined Soyadi: undefined

```



Ben undefined ile gelen sonuçlara varsayılan bir değer atanmasını istiyorum. Bunun için aşağıdaki gibi değerlerime varsayılan tanımlıyorum ve fonksiyonumu boş bir şekilde çağırıyorum.

Ekran çıktım :

```
Adı: Ad Bilgisi Yok Soyadi: Soyad Bilgisi Yok

```

\
*Tabii ki bunu if koşulları ile de kontrol yapabiliriz.*

Bir sayının karesini aldığım fonksiyonu da buraya bırakıyorum…

```javascript
function kareAl(a) {
    console.log(a*a);
}
 
// Fonksiyonu Çağıralım
 
kareAl(12612);
 
// Ekran Çıktımız 159062544
```



Yazı sonuna kadar okunmuşsa ne mutlu bana, daha fazla konular paylaşmaya çalışacağım. Sağlıkla kalın…

kaynak: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions>
