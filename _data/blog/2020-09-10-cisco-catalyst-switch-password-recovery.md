---
template: BlogPost
path: /cisco-catalyst-switch-password-recovery
date: 2020-09-10T14:29:55.080Z
title: Cisco Catalyst Switch Password Recovery
metaDescription: Cisco Catalyst Switch Password Recovery
thumbnail: /assets/cisco-şifre-resetleme.jpg
---
Merhabalar arkadaşlar. Cisco Catalyst modellerinde unuttuğunuz enable şifresini yeniden belirleme işlemlerini aşağıda adım adım anlatıyorum. Umarım faydalı olur.

Öncelikle switchimizi elektriğe takmadan önünde bulunan “Mode” tuşuna basık tutarken switchimizi elektriğe takıyoruz. Daha sonra IOS ekranımızda aşağıdaki satırlar belirecektir.

```
flash_init
load_helper
boot
switch:
```

burada **flash_init** komutunu yazıp enter’a basıyoruz.

daha sonra kullancağımız komut ise **load_helper**

bir sonraki komut ise **dir flash:**

bir sonraki **rename flash:config.text flash:config.old**

bu işlemlerden sonra **boot** komutunu kullanıyoruz. Bu komutla birlikte karşımıza gelen Continue with configuration dialog? \[yes/no]: sorusuna N işaretleyip devam ediyoruz. Daha sonra ki aşamaları alta sırasıyla yazıyorum.

```
Switch>en
Switch#
Switch#rename flash:config.old flash:config.text
Switch#copy flash:config.text system:running-config
```

Şimdi yeni şifremizi belirleyebiliriz.

```
test(config)#enable secret <yeni secret şifreniz>
test(config)#enable password <yeni en şifreniz>
test(config)#line vty 0 15
test(config-line)#password <new_vty_şifreniz>
test#write memory
Building configuration...
[OK]
test#
 
Bu KADAR!
```
