---
template: BlogPost
path: /roas
date: 2021-02-18T12:34:22.181Z
title: Router On a Stick - RoaS
metaDescription: Sanal ağlar oluşturma ve iletişimlerini sağlama.
thumbnail: /assets/router-on-a-stick.JPG
---
Her vlan farklı bir broadcast domain oluşturdukları için farklı vlanlardaki cihazlar ile iletişim kuramazlar. Broadcast domain ile ilgilide ufak makalem yolda :) 

Bu vlanların aralarında iletişim kurabilmeleri için Routerlar üzerinde yapılandırmalar gereklidir. Normalde her bir network için bir interface kullanıyorduk. Haliyle bir router'da sınırlı sayıda interface olacağından dolayı bir süre sonra maliyet taraflarınıda düşünecek olursak en mantıklı yol bize sunulmuş olan **RoaS** nimetinden faydalanmak olacak. 

**RoaS** ile bir interface üzerinde sanal alt interfaceler (sub-interface) oluşturacağız. İşte buna Router on a Stick adı verilmiş. Yani basitce anlatmak gerekirse; örneğin router üzerindeki fiziksel 1 portumuzu birazdan göstereceğim örnekle 2 alt porta böleceğiz. 

Şimdi 1 router, 1 switch, 2 adet PC ile senaryoma başlıyorum.

![roas-ufukcam](/assets/roas-senaryo.JPG)

İlk olarak 2 pc için yapılandırmalarımızı hızlıca yapalım.

```javascript
IT(config)#vlan 10
IT(config)#vlan 20
IT(config)#interface fastEthernet 0/1
IT(config-if)#switchport access vlan 10
IT(config)#interface fastEthernet 0/2
IT(config-if)#switchport access vlan 20
IT(config)#interface gigabitEthernet 0/1
IT(config-if)#switchport mode trunk
```

şimdi gelelim Roas yapılandırmamıza. gigabitethernet 0/1 portuna girerek portu ayağa kaldıralım.  

```javascript
routerTest>en
routerTest>conf t
routerTest(config)#Interface gigabitEthernet 0/1
routerTest(config)#no ip address
routerTest(config)#no shutdown
```

Portu sadece açıyoruz. herhangi bir ip adresi tanımlamayacağız.  Şimdi asıl noktaya gelelim. İlk interfacemizi oluşturalım ve vlan atamamızı yapalım!

```javascript
routerTest(config)#Interface gigabitEthernet 0/1.10
```

Burada **.**'dan sonraki 10 değeri VLAN numaramız oluyor. bu işlemden sonra kapsüllenme işlemini yapmamız gerekiyor. VLAN Encapsulation data paketlerinin içerisindeki vlan kimliklerini tanımlamaktadır. burda gigabit 0/1 portu üzerinden geçecek olan 10 ve 20 vlanları diğer tüm vlanlar tarafından bu sayede tanınacaktır. 

```javascript
routerTest(config)#encapsulation dot1Q 10
routerTest(config)#ip address 192.168.10.1 255.255.255.0
```

 **Yukarıdaki satırda 0/1 in  diğer ayağının VLAN 10 a bağlı olduğunu söylüyoruz.**

Aynı işlemi vlan 20 içinde yapınız.  

Şimdi vlanlarımızı oluşturduk, Roas yapılandırmamızı yaptık gateway atama işlemlerini yaptık. 

Böylece VLAN ve VLAN20 haberleşebilir durumda.

Aşağıdaki resimde de gigabitEthernet0/0 ' ın 2 sub-interface'ini görebiliriz.

![roas](/assets/roas.JPG)
