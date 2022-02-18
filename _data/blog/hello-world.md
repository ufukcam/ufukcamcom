---
template: BlogPost
path: /cisco-port-security
date: 2019-02-20T07:08:00.000Z
title: Cisco Port Security
metaDescription: Cisco ile port security
thumbnail: /assets/cisco_port_security.JPG
---
<!--StartFragment-->

Merhabalar portlara gelen mac adreslerini kayıt altına alarak aynı porta başka bir mac adresi girişini engelliyoruz. CLI satırlarım aşağıdaki gibi. Porta başka bir mac adresi geldiği anda portu shut-down yapıyoruz.

```javascript
Switch>en
Switch#conf
Switch(config)#interface fastEthernet 0/1
Switch(config-if)#switchport mode access 
Switch(config-if)#switchport port-security ?
Switch(config-if)#switchport port-security 
Switch(config-if)#switchport port-security mac-address sticky 
Switch(config-if)#switchport port-security maximum 1
Switch(config-if)#switchport port-security violation shutdown
```

<br>Maximum mac adresimizi belirledik ve violation durumunda shutdown olmasını ayarladık.\
Yapmış olduğumuz güvenlik protokolümüzü görüntülemek için (fa 0/1)<br>

```javascript
sh port-security interface fastEthernet 0/1
```

<br>Kapanmış olan portu görüntülemek için<br>

```javascript
sh port-security 
```

<br>Kapanan portu açmak için<br>

```javascript
conf t
#interface fastEthernet 0/1
shutdown
no shshutdown
```

<br>Port Security tamamen kapatmak için no komutlarını kullanabilirsiniz.<br>

```
no switchport port-security maximum
no  switchport port-security mac-address sticky
no switchport port-security
```

<!--EndFragment-->
