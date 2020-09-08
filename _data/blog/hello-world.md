---
template: BlogPost
path: /cisco-port-security
date: 2020-02-20T07:08:53.137Z
title: Hello World
metaDescription: Meta description for Hello World
thumbnail: /assets/image-3.jpg
---
<!--StartFragment-->

Merhabalar portlara gelen mac adreslerini kayıt altına alarak aynı porta başka bir mac adresi girişini engelliyoruz. CLI satırlarım aşağıdaki gibi. Porta başka bir mac adresi geldiği anda portu shut-down yapıyoruz.

```javascript
Switch>en
Switch#conf
Switch(config)#interface fastEthernet 0/1
Switch(config-if)#sw
Switch(config-if)#switchport mode access 
Switch(config-if)#sw
Switch(config-if)#switchport po
Switch(config-if)#switchport port-security 
Switch(config-if)#switchport port-security ?
  aging        Port-security aging commands
  mac-address  Secure mac address
  maximum      Max secure addresses
  violation    Security violation mode
  <cr>
Switch(config-if)#switchport port-security 
Switch(config-if)#switchport port-security mac-address ?
  H.H.H   48 bit mac address
  sticky  Configure dynamic secure addresses as sticky
Switch(config-if)#switchport port-security mac-address sticky 
Switch(config-if)#switchport port-security maximum 1
Switch(config-if)#switchport port-security violation shu
Switch(config-if)#switchport port-security violation shutdown
```

 Yapmış olduğumuz güvenlik protokolümüzü görüntülemek için (fa 0/1)

```javascript
sh port-security interface fastEthernet 0/1

```

Kapanmış olan portu görüntülemek için

```javascript
sh port-security 

```

Kapanan portu açmak için

```javascript
conf t
#interface fastEthernet 0/1
shutdown
no sh
```

<!--EndFragment-->
