---
template: BlogPost
path: /terminal-server-lisans-hatasi
date: 2019-04-10T12:12:00.000Z
title: Terminal Server Lisans Hatası
metaDescription: |
  Terminal Server Lisans Hatası
thumbnail: /assets/windows_terminal_server.jpg
---
Terminal Server’a rdp ile bağlanırken aşağıdaki hatayı alıyorsanız bu işlemleri uygulayabilirsiniz.

![](/assets/ts.png)



İlk olarak regedit’teki terminal server keylerini temizlememiz gerekiyor. Bunun için yönetici olarak regedit’i çalıştırdıktan sonra HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\RCM\GracePeriod yolundaki keyi temizliyoruz.

![](/assets/ts3.png)



Bu keyi silme esnasında**“Unable to delete all specified values.”**hatası alırsanız. Bu [adresten](http://technet.microsoft.com/en-us/sysinternals/bb896649) PSTools programını indiriniz. PsExec.exe dosyasını C:\Windows\System32 dosyasının içine kopyalayınız. Daha sonra yönetici olarak cmd.exe çalıştırıp aşağıdaki komut satırını işleme alınız.

```
psexec -s -i regedit.exe

```



Bu işlemden sonra key’i rahatlıkla silebilirsiniz. Terminal Server’ınızı restart ettikten sonra sorununuz ortadan kalkmış olaraktır
