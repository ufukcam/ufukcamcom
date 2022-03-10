---
template: BlogPost
path: /wazuh-kurulumu-ve-ayarlari
date: 2022-03-10T17:06:35.651Z
title: Centos üzerine All in One Unattended Wazuh Server Kurulumu ve Ayarları
metaDescription: 'Wazuh Kurulumu ve Ayarları, Wazuh Installation All in One'
---
Merhabalar bildiğiniz üzere Wazuh açık kaynak kodlu bir SIEM ürünüdür. Wazuh yetkisiz girişleri, regedit kayıtlarını, log analizlerini, zafiyetleri gibi bir çok alandaki loglarınızı takip eder ve anlaşılabilir şekilde size bildirir. Active Response olaylarını başka bir yazımda anlatacağım. Centos kurulumundan başlamıyorum. Eğer centos kurulumuna ihtiyaç duyarsanız [buradan](https://phoenixnap.com/kb/how-to-install-centos-7) erişebilirsiniz.

Benim şu an ki kullandığım sistem özellikleri aşağıdaki gibi.

* OS: Centos 7 

  4 GB Ram

  240 GB SSD Disk

  4 Core CPU

İlk olarak all in one katılımsız kurulum ile tek sunucu üzerinde wazuh kurulumunu gerçekleştireceğiz. Bu kurulumun içinde wazuh manager, elasticsearch, filebeat, kibana yer alamaktadır.

```editorconfig
curl -so ~/unattended-installation.sh https://packages.wazuh.com/resources/4.2/open-distro/unattended-installation/unattended-installation.sh && bash ~/unattended-installation.sh

```

Bu kurulum belirli bir süre geçtikten sonra son bulacak ve aşağıdaki çıktıyı göreceksiniz.  En temiz ve sizler için basit olan kurulum böyledir.



```
 04/7/2022 03:19:12 INFO: Installation finished
 04/7/2022 03:19:12 INFO: You can access the web interface https://<kibana_ip>. The credentials are admin:admin
```

Daha sonra ip ile wazuh kontrol paneline erişebilirsiniz.

![Wazuh Login Screen](/assets/wazuh-login-scren.png "Wazuh Login Screen")
