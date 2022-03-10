---
template: BlogPost
path: /wazuh-kurulumu-ve-ayarlari
date: 2022-03-10T17:06:35.651Z
title: Centos üzerine All in One Unattended Wazuh Server Kurulumu ve Ayarları
metaDescription: 'Wazuh Kurulumu ve Ayarları, Wazuh Installation All in One'
thumbnail: /assets/wazuh-blog2.jpg
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

<br>Bu kurulum belirli bir süre geçtikten sonra son bulacak ve aşağıdaki çıktıyı göreceksiniz.  En temiz ve sizler için basit olan kurulum böyledir.

```
 03/10/2022 03:19:12 INFO: Installation finished
 03/10/2022 03:19:12 INFO: You can access the web interface https://<kibana_ip>. The credentials are admin:admin
```

<br>Daha sonra ip ile wazuh kontrol paneline erişebilirsiniz.

![Wazuh Login Screen](/assets/wazuh-login-scren.png "Wazuh Login Screen")

<br>Şimdi wazuh kontrol paneline hiç geçmeden hızlıca agent eklemeye bakalım. Örnek olarak AD yapımdaki login olaylarını takip etmek istiyorum. Bunun için AD sunucumu ilk agent olarak ekleyeceğim. Ben kendi kullandığım deploy yolunu anlatacağım. Wazuh panelinden deploy etme yoluda var fakat bence ikiside aynı kapıya çıkıyor.

İlk olarak agentıma wazuh agent yükleyicisini kullanarak yüklemek için [buradan](https://packages.wazuh.com/4.x/windows/wazuh-agent-4.2.5-1.msi) indirin ve kurun.\
Daha wazuh server'a bağlanıyorum. Ve agent managera giriyorum.<br>

```
[root@localhost ~]# /var/ossec/bin/manage_agents
```

 <br>Bu bölüm sizi yönlendirecektir. Buradan Add an agent yolunu takip ederek bir agent ekliyoruz. Ve işlem sonucunda bize bir key veriyor. Bu keyi saklıyoruz. Artık agent'ımız wazuh servera eklendi. Şimdi agent ayarlarını yapmalım.

Agent sunucumuzda **C:\Program Files (x86)\ossec-agent** yoluna gidiyoruz burada bulunan win32ui.exe yi çalıştırabilirsiniz. Aynı zamanda ossec.conf dosyasınıda yapılandırabilirsiniz. GUI(win32ui.exe) üzerinden devam edecek olursak açılan pencerede Wazuh server ipnizi ve not almış olduğunuz keyinizi giriyor ve save diyorsunuz. Save dedikten sonra Manage menüsünden agent'ı başlatabilirsiniz. <br>

![wazuh-agents](/assets/Ekran Resmi 2022-03-10 20.43.04.png)

<br>Daha sonra wazuh panelinizde agent bölümünde active olarak görebilirsiniz.

![wazuh-agent-list](/assets/wazuh-agent-list.png)

Agent üzerinde yapacağınız tüm local ayarları ossec.conf dosyası üzerinde yapabilirsiniz. Bunun için wazuh detaylı dökümanlarını inceleyebilirsiniz. 

Dikkat edilmesi gereken önemli nokta ise wazuh agentlar ile birden fazla port kullanarak haberleşmektedir. Bunun için firewall'unuzda gerekli ayarları yapmaz iseniz agentlarınız ile haberleşemeyebilirsiniz. Bu durumuda agentda yine aynı yolda bulunan Ossec Log dosyasından görebilirsiniz. \
\
Gerekli Bağlantı Noktaları için [buraya](https://documentation.wazuh.com/current/getting-started/architecture.html) tıklayın.
