---
template: BlogPost
path: /cisco-trunk-yapilandirmasi
date: 2020-02-20T14:59:36.571Z
title: Vlan Trunk Protokolü Yapılandırması
metaDescription: Vlan Trunk Protokolü Yapılandırması
thumbnail: /assets/image-5.jpg
---
Trunk switchler arasında vlan bilgilerini taşımak için kullanılır. Aşağıdaki topolojide server switch üzerindeki vlan yapısını transparent switch üzerinden geçirerek client switch’e göndermektedir. Cisco Switch’ler üzerinde sadece cisco’nun ürünlerine ait kapsülleme işlemleri bulunmaktadır. 802.1Q kapsülleme tüm Switchlerin birbirili ile çalışması için geliştirilmişken ISL (inter-switch-link) sadece Cisco’ya özgü bir kapsüllemedir.

![cisco trunk protokolü](/assets/trank.png)

```javascript
Switch>en
Switch#conf t
Switch(config)#interface gigabitEthernet 0/1
Switch(config-if)#switchport mode
Switch(config-if)#switchport mode tr
Switch(config-if)#switchport mode trunk
```
