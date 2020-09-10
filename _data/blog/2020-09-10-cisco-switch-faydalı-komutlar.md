---
template: BlogPost
path: /cisco-switch-faydali-komutlar
date: 2020-09-10T17:49:34.642Z
title: Cisco Switch Faydalı Komutlar
metaDescription: |
  Cisco Switch Faydalı Komutlar
thumbnail: /assets/cisco_ufukcam.jpg
---
Merhabalar arkadaşlar kısa ama faydalı serisine yeni bir yazı ekliyorum 🙂 bu yazı sürekli olarak güncellenecektir. Cisco Switchler ile ilgili işimize yarar  komutlar paylaşacağım. 

Device Mac Adreslerini Listeleme

```
show mac address-table
veya
show mac address-table dynamic
veya
sh mac address-table | include Gi1/0/([1][0-9])
```

<!--StartFragment-->

Kapanan Portu Açma



<!--EndFragment-->

```
conf t
#interface fastEthernet 0/1
shutdown
no sh
```

<!--StartFragment-->

Shut-Down olan portu görme



<!--EndFragment-->

```
Switch#sh port-security

```

<!--StartFragment-->

Port Security Sorgulama



<!--EndFragment-->

```
Switch#sh port-security interface fastEthernet 0/1

```

<!--StartFragment-->

Örnek Port Security



<!--EndFragment-->

```
Switch>
Switch>en
Switch#conf
Configuring from terminal, memory, or network [terminal]? 
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#int
Switch(config)#interface fa
Switch(config)#interface fastEthernet 0/1
Switch(config-if)#sw
Switch(config-if)#switchport mode
Switch(config-if)#switchport mode ac
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
Switch(config-if)#switchport port-security mac
Switch(config-if)#switchport port-security mac-address ?
  H.H.H   48 bit mac address
  sticky  Configure dynamic secure addresses as sticky
Switch(config-if)#switchport port-security mac-address st
Switch(config-if)#switchport port-security mac-address sticky 
Switch(config-if)#switchport port-security max
Switch(config-if)#switchport port-security maximum 1
Switch(config-if)#sw
Switch(config-if)#switchport po
Switch(config-if)#switchport port-security via
Switch(config-if)#switchport port-security vio
Switch(config-if)#switchport port-security violation shu
Switch(config-if)#switchport port-security violation shutdown
```

<!--StartFragment-->

SSH ve ACL yapılandırması



<!--EndFragment-->

```
Switch>en
Switch#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname SW1
SW1(config)#doma
SW1(config)#ip domai
SW1(config)#ip domain-name cisco.com
SW1(config)#crypto
SW1(config)#crypto key
SW1(config)#crypto key gene
SW1(config)#crypto key generate rs
SW1(config)#crypto key generate rsa 
The name for the keys will be: SW1.cisco.com
Choose the size of the key modulus in the range of 360 to 2048 for your
  General Purpose Keys. Choosing a key modulus greater than 512 may take
  a few minutes.
 
How many bits in the modulus [512]: 1024
% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]
 
 
SW1(config)#userna
*Mar 1 0:3:12.370: %SSH-5-ENABLED: SSH 1.99 has been enabled
SW1(config)#username admin
SW1(config)#username admin pas
SW1(config)#username admin password cisco
SW1(config)#enab
SW1(config)#enable sec
SW1(config)#enable secret cisco
SW1(config)#line vty 0 4
SW1(config-line)#trans
SW1(config-line)#transport inpu
SW1(config-line)#transport input SSH
SW1(config-line)#exit
SW1(config)#
```

<!--StartFragment-->

Örnek Trunk Yapılandırması



<!--EndFragment-->

```
Switch(config)#interface gigabitEthernet 0/1
Switch(config-if)#switchport mode trunk
```

<!--StartFragment-->

Switch Üzerindeki Device’ları görüntüleme



<!--EndFragment-->

```
sh cdp nei

```

<!--StartFragment-->

Cisco Switch SNMB Açma



<!--EndFragment-->

```
sw#telnet testrouter
Router>enable
Password:
Router#
Go into configuration mode:
 
Router#configure terminal 
Enter configuration commands, one per line. End 
with CNTL/Z. 
Router(config)#
Use the command below to add a Read-Only community string:
 
Router(config)#snmp-server community public RO
where "public" is the Read-only community string.
To add a Read-Write Community string, use the command below:
 
Router(config)#snmp-server community private RW
where "private" is the Read-write community string.
Exit the configuration mode and save the settings:
 
Router(config)#exit 
Router#write memory 
Building configuration... 
[OK] 
Router#
To enable SNMP traps, follow the steps below in the Configuration mode of the Router/Switch:
First, set the host to which the traps have to be sent using the folowing command: 
snmp-server host <IP Address> version <v1 or 2c> <RO community string>
where,
<IP Address> refers to the IP Address of the device to which the traps have to be sent
<v1 or 2c> refers to the SNMP version
<RO community string> refers to the Read-Only community string
Then, enable SNMP Traps using the command below:
snmp-server enable traps [notification-type] [notification-option] 
Ex: snmp-server enable traps config [this will send all configurationnotifications as traps]
```
