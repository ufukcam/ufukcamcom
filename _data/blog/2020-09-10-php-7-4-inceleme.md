---
template: BlogPost
path: /php-7-4-inceleme
date: 2019-12-10T13:09:00.000Z
title: PHP 7.4 İnceleme
metaDescription: |
  PHP 7.4 İnceleme
thumbnail: /assets/php-7-4-768x192.png
---
Merhabalar Arkadaşlar PHP 8 den önce son sürüm olan Php 7.4 28 Kasımda hayatımıza girmiş bulunmakta. Bu versiyon bir çok yenilik,özellik ve düzeltme getiriyor. Aşağıda sizlere @izniburak ve stitcher.io/blog/new-in-php-74 sayfasından alıntılarımı bırakıyorum.

Şimdi PHP 7.4 ile hayatımıza neler girecek bir göz atalım. PHP 7.4 ile gelen yeni özellikleri başlıca olarak şöyle maddelendirebiliriz:

* Arrow functions
* Preloading
* Typed properties (in Classes)
* Improved type variance
* Spread operator in Arrays
* Null assignment operator
* FFI (for better extension development in PHP)
* Formatted Numeric Values (Numeric Literal Separator)

Şimdi bu maddeleri kısa kısa inceleyelim, bakalım bizi neler bekliyor!

## Arrow Functions

Closure ve Anonymous fonksiyonları PHP’de uzun zamandır kullanıyoruz. Bununla alakalı küçük bir örnek yazalım:

```php
array_map(function(Article $article) {
  return $article->title;
}, $articles);
```



Bu şekilde tek satır olarak kullandığımız, sadece return işlemi yapan fonksiyonları artık Arrow Functions ile şu şekilde kullanabileceğiz:

```php
array_map(fn(Article $article) => $article->title, $articles);

```



Arrow Functions ile ilgili bilmemizin faydası olacağını düşündüğüm bir kaç bilgiyi de sizinle paylaşayım:

* Parent scope içerisinde bulunan değişkenlere **use** anahtar kelimesini kullanmadan direkt olarak Arrow Functions içerisinde erişebiliyoruz.
* Arrow Functions **sadece return işlemi** içermeli ve tek bir satırda yazılmalıdır.

## Typed Properties (in Classes)

Bu özellik ile artık sınıflar içerisinde tanımladığımız değişkenlere (class variables) tür tanımlaması yapabileceğiz. Şöyle ki:

```php
class Foo
{
  public string $foo;
  public ?Bar $bar;
}
```



Burada bazı özel hususlar mevcut. Örneğin; public olarak tanımlanmış bir sınıf değişkenine, herhangi bir yerden erişmemiz mümkün. Ama eğer bu değişkene bir tür tanımlaması yaptıysak ve bu değişken için bir initialize (değer tanımlaması diyebiliriz) yapmadıysak; değişkene erişmeye çalışırken şuna benzer bir hata alacağız:

```php
Fatal error: Uncaught Error: Typed property Foo::$bar  must not be accessed before initialization

```



## Improved Type Variance

PHP 7 ile birlikte yazdığımız fonksiyonlar dönüş tipi belirtebileceğimiz bir özellik geldi. Güzel de oldu. Bu özellik ile belli veri tipleri için dönüş tipleri (return types) belirtebiliyorduk.

PHP 7.4 ile bu olay biraz daha geliştirilmiş ve artık covariant dönüş tipi de kullanabileceğiz. Örneklendirecek olursak:

```php
class Foo {}
class Bar extends Foo {}
class A
{
  public function covariantReturnTypes(): Foo
  {
    // your codes
  }
}
class B extends A
{
  public function covariantReturnTypes(): Bar
  {
    // your codes
  }
}
```



Buna ek olarak covariant tiplerin kullanımı sadece dönüş tipleri için değil, fonksiyon parametre tipleri için de kullanılabilecek. Şöyle ki:

```php
<span id="e8f3" class="rs rt co at sm b bl sn so r sp" data-selectable-paragraph="">class A
{
  public function contraVariantArguments(ChildType $type)
  {
    // your codes
  }
}</span><span id="222e" class="rs rt co at sm b bl sq sr ss st su so r sp" data-selectable-paragraph="">class B extends A
{
  public function contraVariantArguments(ParentType $type)
  {
    // your codes
  }
}</span>.
```



## Null Assignment Operator

Biliyorsunuz PHP 7 ile birlikte hayatımıza null operatörü girmişti. Şu şekilde bir kullanım yapabiliyorduk:

```php
<span id="f448" class="rs rt co at sm b bl sn so r sp" data-selectable-paragraph="">$data['date'] = $data['date'] ?? new DateTime();</span>

```



Artık bu gibi işlemleri yeni eklenecek Null Assignment Operator ile şu şekilde çok daha kısa yapabileceğiz:

```php
<span id="65b0" class="rs rt co at sm b bl sn so r sp" data-selectable-paragraph="">$data[‘date’] ??= new DateTime();</span>

```

## Array Spread Operator

Spread operatörünü (…) fonksiyon parametrelerinde kullanabiliyorduk. Artık bu operatör direkt olarak diziler içerisinde de kullanıma uygun hale getirilmiş. Güzel de olmuş. Şöyle bir örnek görelim:

```phtml
<span id="3d43" class="rs rt co at sm b bl sn so r sp" data-selectable-paragraph="">$foo = [1, 2, 3];</span><span id="3f39" class="rs rt co at sm b bl sq sr ss st su so r sp" data-selectable-paragraph="">$bar = [4, 5];</span><span id="bed1" class="rs rt co at sm b bl sq sr ss st su so r sp" data-selectable-paragraph="">$result = [0, ...$foo, ...$bar, 6 ,7];</span><span id="c3fe" class="rs rt co at sm b bl sq sr ss st su so r sp" data-selectable-paragraph="">// [0, 1, 2, 3, 4, 5, 6, 7]</span>

```



Burada dikkat etmemiz gereken bir husus var o da; bu işlemi sadece **numeric index key**’lere sahip diziler ile yapabiliyor olmamız. Bu da aklınızda bulunsun. Belki ilerleyen zamanlarda tüm key’ler için işlem yapabileceğimiz geliştirmeler yapılabilir.

## Numeric Literal Separator

PHP 7.4 ile birlikte alt tire (underscore) karakteri ile birlikte uzun numeric ifadeleri daha görsel yazabilmek mümkün olacak. Şöyle bir örnek verelim:

```php
<span id="6b21" class="rs rt co at sm b bl sn so r sp" data-selectable-paragraph="">$unformatted = 123456789.12
$formatted = 123_456_789.12</span>
```



## Foreign Function Interface (FFI)

Bu özellik ile bazı core-level özellikleri kullanmak istediğimizde kendi kodumuz üzerinden C kodunu çağırma imkanı bulabileceğiz. Özetle; PHP ile bir PHP extension yazabilecek ve bunu kullanabileceğiz. Bunun için yine de C bilgisi gerekecek çünkü bu tarz bir geliştirmenin hala karışık ve zorlu tarafları var. Sonuçta core-level’da işlem yapacağız ve bu beraberinde C bilgisini gerektirecek.

Bu konu çok fazla araştırma veya deneme fırsatı bulduğum bir konu değil maalesef, elimden geldiğince temel bilgi vermeye çalışıyorum. Bu nedenle, bu konu hakkında detaylı bilgisi olan veya kaynak paylaşabilecek kişiler bana ulaşabilirse, yazının bu kısmını güncelleyip daha detaylı ve doğru bilgi verebiliriz diye düşünüyorum.

## Preloading

Bu özellikte bir başka core-level özellik. Ve sanırım benim en dikkatimi çeken ve hoşuma giden özelliklerin başında bu geliyor. Bu özellik ile birlikte PHP ile yazdığımız uygulamalarda ciddi performans artışları söz konusu olabilir.

Şimdi bu olayı kısaca ele alalım: PHP ile bir web uygulaması yazdığımızı düşünelim. Bunun için herhangi bir frameworkü kullanıyoruz veya kendimizce bir yapı oluşturmuş ve bunu kullanıyoruz. Server’a gelecek her request için uygulamanızda bulunan gerekli dosyaların sürekli olarak yüklenmesi gerekecek. Bu dosyaları sizin uygulamanızın core dosyaları olarak düşünebilirsiniz. Yani uygulama çalışırken kesinlikle yüklenmesi gereken dosyalar. Çekirdek sınıflar, fonksiyonlar, config dosyaları vs… Tüm bu dosyalar her gelen request için bir daha, bir daha yüklenecek. İşte burada devreye Preloading giriyor!

Preloading, sunucunun en başta istediğiniz dosyaları belleğe almasını ve gelen her request için bu dosyaları direkt olarak bellekten kullanması sağlıyor. Böylece her request için dosyaların tekrar tekrar yüklenmesini beklemek zorunda kalmıyor ve buradan önemli bir performans artışı elde edebiliyoruz.

Burada dikkat edilmesi gereken bir husus var. Eğer Preloading yapmış olduğunuz dosyaların kaynağı veya içeriği değişirse, sunucunun yeniden başlatılması gerekiyor. Daha sonrasında dosyalar yeni halleriyle tekrar belleğe alınabilir.

TEŞEKKÜRLER!!!
