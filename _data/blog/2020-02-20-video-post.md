---
template: BlogPost
path: /hyper-v-ile-sanal-makina-olusturma
date: 2020-02-20T15:05:49.332Z
title: Hyper-V ile Sanal Makine Oluşturma
metaDescription: Hyper-V ile Sanal Makine Oluşturma
thumbnail: /assets/image-1.jpg
---
Merhabalar elimden geldiği kadarıyla Windows Server 2012 R2 üzerinden (tabii ki Server with GUI ile yapılandırılmış ise) hyper-v manager kullanarak ana hatları ile sanal makine oluşturmayı göstereceğim. Adım adım yazının devamındaki gibi birlikte ilerleyelim.

**Adım 1:**Server Manager kısmından *Add Roles and Features*menüsüne giriyoruz ve Hyper-V etkin hale getiriyoruz.

![](/assets/hyper1.jpg)

![](/assets/hyper2.jpg)

**Adım 2:**Yükleme işlemi bittikten sonra Hyper-V konsoluna geçiş yapabiliriz.

![](/assets/hyper3.jpg)



Hyper-V konsolu aşağıdaki gibi karşımıza gelecektir. Burada benim kendi sanal makinalarım bulunmakta.

**Adım 3:**Bir sonraki adımda yeni bir sanal makine oluşturmak için**Action > New > Virtual Machine**yolunu takip ediyoruz.

![](/assets/hyper5.jpg)

Açılan pencerede aşağıdaki adımları sıra ile izleyebilirsiniz.

![](/assets/hs1.jpg)

![](/assets/hs2.jpg)

Bu kısımda Generetion 2’yi seçmiştim aslında fakat fotoğrafı yanlış eklemişim. Hyper V Generation 1 ve 2 ile ilgili konuya burdan ulaşabilirsiniz.

Tavsiyem Finish butonuna basmayın ve next adımlarından devam ederek ayarlarınızı kendinize göre ayarlayınız.

![](/assets/hs3.jpg)

![](/assets/hs4.jpg)

**Adım 4:**Bu adıma kadar geldikten sonra sanal bilgisayarımıza diskleri bağlıyoruz.

![](/assets/hs5.jpg)

**Adım 5:** Bu adımda işletim sistemimizi ilk açılışta kurmak istersek 2.seçenekteki Install An Operating System From a bootable CD seçeneğini seçiyoruz ve finish diyebilriz. Göstereceğimiz iso dosyası ile ilk açılışta işletim sistemimizi kurabiliriz. Yazının sonunda ek bilgileri sizinle paylaştım.

![](/assets/hs6.jpg)

**Ek Bilgiler :**Generation 1 ve Generation 2 yetenekleri[buradaki](https://www.ufukcam.com/wp-content/uploads/2018/12/gui1-2.pdf)dosyadan inceleyebilirsiniz.

Hyper-V Manager Ekranında Listelenen makinenizin sağ tık ile işlemlerini gerçekleştirebilirsiniz. Bir sonraki yazımda daha detaylı yapılandırmalar hakkında bahsetmeye çalışacağım.

![](/assets/hs7.jpg)
