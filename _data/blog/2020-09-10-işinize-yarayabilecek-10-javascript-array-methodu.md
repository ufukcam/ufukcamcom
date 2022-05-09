---
template: BlogPost
path: /javascript-array-method
date: 2020-09-10T17:22:21.663Z
title: İşinize Yarayabilecek 10 JavaScript Array Methodu
metaDescription: |
  İşinize Yarayabilecek 10 JavaScript Array Methodu
thumbnail: /assets/array.jpg
---
**1. flat()**

Flat ile belirttiğimiz derinliğe kadar inip arrayleri tek bir arrayde düzleştirebiliriz.

```javascript
const exampleArray = [10, 20, [30, 40], [50, 60, 70]];
exampleArray.flat(); // derinlik belirtmiyorum. 
// Output : [10,20,30,40,50,60,70];
```

şimdi ise derinlik belirtelim.

kullanımı bu şekildedir => array.flat(<depth>); Derinlik belirtmemişsek derinliği 1 olarak alacaktır.

```javascript
const exampleArray = [[10, 20, [30, 40]], [50, 60, 70]];
exampleArray.flat(2); // depth 2 
// Output : [10,20,30,40,50,60,70];
```

**2. every()**

Belirtiğimiz koşul için array içerisindeki tüm elemanları kontrol eder. Eğer hepsi buna uyuyorsa true dönecektir.

```javascript
const exampleArray = [10, 20, 30, 40, 50, 60, 70];
exampleArray.every(num => num >= 10); // hepsi 10'dan büyük yada eşitse
// Output : TRUE
```

**3. some()**

Array içerisinde koşula uyan tek bir eleman bulunduğu anda ***true*** dönecektir.

```javascript
const exampleArray = ['k', 'u', 't', 'a', 'y'];
exampleArray.some(letter => letter === 'u'); // u harfi varsa
 
// Output : TRUE
```

kısaca yazmak gerekirse;

```javascript
const exampleArray = ['k', 'u', 't', 'a', 'y'].some(baby => baby === 'u');
```

bir örnekle daha yapalım.

```javascript
const example2 = [10, 20, 30, 40].some(num => num > 20); // 20'den büyük numara varsa
// Output : TRUE
```

**4. map()**

Map methodu sayesinde arrayimizin içindeki değerlerde değişiklik yapıp yeni bir array olarak yazmamızı sağlar. Bir kaç örnekle gösterecek olursak.

```javascript
const exampleArray = [2, 4, 6, 8, 10, 12];
exampleArray.map(x => x + 2); // her array değerine 2 ekleyeceğim
Outout : [4, 6, 8, 10, 12, 14]
```

```javascript
const exampleArray = [2, 4, 6, 8, 10, 12];
const newArray = exampleArray.map(value => value * 2); // 2 ile çarpalım
 
// newArray Output : [4, 8, 12, 16, 20, 24]
```

**5. filter()**

Filter methodu ile arrayimizin içerisindeki belirttiğimiz değerleri alırız ve yeni bir array oluştururuz. Hemen örnek yapalım.

```javascript
const exampleArray = [
    { user: 'Kutay', salary: 100 },
    { user: 'Ahmet', salary: 200 },
    { user: 'Mehmet', salary: 300 },
    { user: 'Kutay', salary: 400 }
];
 
 
exampleArray.filter(Element => Element.user === 'Kutay');
 
//  Output : 0:{user: "Kutay", salary: 100},
//           1:{user: "Kutay", salary: 400}
```

**6. find()**

Find methodu aldığı test fonksiyonuna bakarak array içerisinde gezer ve ilk karşılaştığı değeri bize verir. Hemen örnek yapalım.

```javascript
const exampleArray = [
    { user: 'Kutay', salary: 100 },
    { user: 'Ahmet', salary: 200 },
    { user: 'Mehmet', salary: 300 },
    { user: 'Cenk', salary: 100 }
];
 
exampleArray.find(Element => Element.salary === 100);
// Output: {user: "Kutay", salary: 100}
```

**7. findIndex()**

Bu method ile test fonksiyonumuza uyan ilk değerin indexini bize verir.

```javascript
const exampleArray = [
    { user: 'Kutay', salary: 100 },
    { user: 'Ahmet', salary: 200 },
    { user: 'Mehmet', salary: 300 },
    { user: 'Cenk', salary: 100 }
];
 
const x = exampleArray.findIndex(element => element.user === 'Cenk');
//Output: 3 eğer bulamıyorsa -1 döndürür
```

**8. forEach()**

Bu method array içerisindeki her eleman için yazdığım fonksiyonu uygulayacak.

```javascript
const exampleArray = [
    { user: 'Kutay', salary: 100 },
    { user: 'Ahmet', salary: 200 },
    { user: 'Mehmet', salary: 300 },
    { user: 'Kutay', salary: 400 }
];
 
 
exampleArray.forEach(Element => console.log(Element.user));
 
// Output: Kutay
//         Ahmet
//         Mehmet
//         Kutay
```

**9. sort()**

Sort methodu ile array elemanlarımızı sıralayabiliriz. Bir örnekle daha rahat anlayalım.

```javascript
const exampleArray = [6, 5, 1, 4, 2, 3];
exampleArray.sort((a, b) => a - b); // küçükten büyüğe 
// Output: [1, 2, 3, 4, 5, 6]
```

```javascript
const exampleArray = ['Zeynep', 'Mehmet', 'Ali', 'Burak', 'Abbas'];
exampleArray.sort();
// Output: ["Abbas", "Ali", "Burak", "Mehmet", "Zeynep"]
```

**10. reverse()**

Bu methot verilen arrayi tersine çevirmektedir. Aşağıdaki örnekte göreviliriz.

```javascript
const exampleArray = [1, 2, 3, 4, 5, 6];
exampleArray.reverse();
// Output : [6, 5, 4, 3, 2, 1]
```

```
  Kaynak: https://developer.mozilla.org/
```
