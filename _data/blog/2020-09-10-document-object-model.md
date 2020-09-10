---
template: BlogPost
path: /document-object-model
date: 2020-09-10T17:15:24.398Z
title: Document Object Model
metaDescription: |
  Document Object Model
thumbnail: /assets/dom_modeli.jpg
---
HTML etiketleri bir araya gelerek DOM’u yani Belge Nesne Modeli yapısını oluşturmaktadır. DOM sayesinde script dilleriyle iletişim kurabiliriz. Programlama denince en çok karşılaştığımız ve pek çok içerikte okuduğumuz Object-Oriented (Nesne Yönelimli) kısmıda bu yapıya benzemektedir. İnternet aleminde tarayıcıları kullanarak görüntülediğimiz tüm sayfalara Document bu sayfaların içeriğinde bulunan tüm elemanları ise element/nesne olarak adlandırabiliriz.

Aşağıda görmüş olduğumuz resimde bir ağaç yapısı olarak Document’i görüyoruz. Bunların hepsi düğümlerle birbirine bağlanmıştır.(node) HTML etiketininin altındaki ögelerin her birine çocuk (child) ismi verilmektedir.

![document object model ufukcam](/assets/dommodeli-768x367.jpg)



Örneğin HTML etiketinin 2 adet çocuğu olduğunu görüyoruz. Bunlar*head*ve*body*elementleri’dir.*head*ve*body*elementleri aynı zamanda altlarında bulunan çocuklarının ebeveynleridir.(parent) Yani head title’ın bir ebeveynidir.

Bu çocukların attributes adını verdiğimiz özellikleri bulunmaktadır. Örneğin aşağıdaki div’in Attributes’i***id***dir. Tüm html özellikleri için[bu linki](https://www.w3docs.com/learn-html/html-attributes.html)inceleyebilirsiniz.

```javascript
<div id = "div2">

```



Onun çoçuğu olan aşağıdaki bölümde***p***elementine bakalım. Burada bir adet özelliği (attributes) ve bir adet çocuğu(child) bulunmakdadır.

```javascript
<p class = "p2">P Etiket 2</p>

```



attributes : class > değeri : p2

child : text > değeri : P Etiket 2

Bu şekilde Document Object Model’imiz oluşur. JavaScript tarafında ise Dom’u kullanarak buradaki tüm elementler üzerinde değişiklikler gerçekleştirebiliriz.
