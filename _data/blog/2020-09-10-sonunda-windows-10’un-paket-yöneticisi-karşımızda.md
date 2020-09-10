---
template: BlogPost
path: /sonunda-windows-10un-paket-yoneticisi-karsimizda
date: 2020-09-10T17:54:04.350Z
title: Sonunda Windows 10’un paket yöneticisi karşımızda!
metaDescription: |
  Sonunda Windows 10’un paket yöneticisi karşımızda!
thumbnail: /assets/ufukcam_npm_windows.jpg
---
<!--StartFragment-->

Benim için her zaman tüm işlevleri komut satırından yapmak eğlenceli olmuştur. Özellikle de Windows 10 mağazasından benim gibi hoşlanmayanlar için bu çok iyi bir haber.

Karşınızda “**winget**”

Gelin bilgisayarımıza **winget’i** birlikte kuralım.

İlk olarak **WIN+R** ile çalıştır bölümünü açıyor ve aşağıdaki alanı yapıştırıp enter’a basıyoruz.

<!--EndFragment-->

```
ms-windows-store://pdp/?productid=9nblggh4nns1

```

<!--StartFragment-->

Karşımıza MS Store’da Uygulama yöneticisi adlı uygulamanın yükleme sayfası gelicektir. Al diyerek yükleyebiliriz.

<!--EndFragment-->

![](/assets/0.1-768x345.jpg)

<!--StartFragment-->

Uygulamayı yükledikten sonra komut satırına “**winget**” komutunu yazıp test edebilirsiniz.



<!--EndFragment-->

![](/assets/2-768x550.jpg)



<!--StartFragment-->

Eğer aşağıdaki gibi bir hata alıyorsanız yapmanız gerekenler var! **Winget** henüz test aşamasında olduğundan ilerleyen zamanlarda bu sorunlar ortadan kalkacak ve bir çok paket eklenecektir. Biz şimdilik buradaki [GitHub sürümünü](https://github.com/microsoft/winget-cli/releases) yükleyerek **winget’i**s orunsuz kullanmaya başlayabiliriz.



<!--EndFragment-->

![](/assets/3-768x179.jpg)

```
winget search

```

<!--StartFragment-->

komutu ile winget ile yükleyebileceğimiz paketleri,programları görebiliriz.

<!--EndFragment-->

![](/assets/uygulama-listesi-768x429.jpg)

<!--StartFragment-->

Yüklemek istediğimiz paket ismini biliyorsak aşağıdaki şekilde kullanabiliriz.



<!--EndFragment-->

```
winget install ccleaner

```



![](/assets/1-768x550.jpg)
