---
template: BlogPost
path: /azure-sanal-makine-olusturma
date: 2020-09-10T15:14:19.402Z
title: Hızlıca Microsoft Azure Sanal Makine Oluşturma
metaDescription: |
  Hızlıca Microsoft Azure Sanal Makine Oluşturma
thumbnail: /assets/azurebg2.jpg
---
Bilindiği üzere Azure Microsoft’un kullanıcılarına sağlamış olduğu sanallaştırma platformudur. İnternette MS Azure ile neler yapabileceğimizi konu alan bir çok makale olduğundan o konuyu tek tek yazmaktan kaçındım açıkcası. Bu makalede hızlıca Azure üzerinde sanal makine oluşturmayı anlatacağım.

Bu teknolojiyi kullanmak için öncelikle Azure Portal’a kaydolmanız gerekmektedir. Kaydolduktan sonra size 90 günlük deneme süresi sunmakta. Bu süreçte kendinizi bu konuda geliştirebilirsiniz. [Bu linkten](https://azure.microsoft.com/tr-tr/free/) inceleyebilir ve kayıt olabilirsiniz.

İlk olarak üyeliğimizi oluşturduktan sonra portal.azure.com adresine giriş yapıp *Virtual Machines* bölümüne gidiyoruz. Ardından*+Add*butonuna tıklıyoruz.

![Azure Sanal Makine Oluşturma](/assets/azure_sanal_makina1.jpg)

<!--StartFragment-->

+Add butonuna tıkladıktan sonra bizi aşağıdaki ekran karşılıyor. Resimdeki gibi doldurabiliriz.

**Subsription:**Sizde seçili gelecektir.

**Resource group:**Burayı kaynak grubunuzun ismini verebilirsiniz.

**Virtual Machine Name:**sanal makinenize vereceğiniz isim

**Region:**Sanal Makine konumunu seçebilirsiniz. (bulunduğunuz ülkeye yakın olan konumu seçmek mantıklı olacaktır.)

**Image**: İşletim sistemimizi seçiyoruz

**Size**: Bu bölümü otomatik getirecektir fakat Change Size bölümünden CPU ve Disklerinizi değiştirebilirsiniz.

**Username ve Password:**Kullanacağınız hesap bilgilerini giriniz

**Select Inbound Port:**Bu kısımda kullanacağınız portları seçmelisiniz. 3389 ve 80 portlarını seçtim.

Üst menüden disk ayarlarınızı, network ayarlarınızı ve bir çok kişiselleştirmeyi yapabilirsiniz.



![](/assets/azure_sanal_makina2.jpg)

![](/assets/azure_sanal_makina3.jpg)



Tüm bu işlemleri yaptıktan sonra Review + Create butonuna bastıktan sonra aşağıdaki ekran bizi karşılayacaktır. Create butonuna bastığımızda sanal makinemiz oluşturulmaya başlayacaktır.

![](/assets/azure_sanal_makina4.jpg)



ve complete! Go to Resource butonuna basarak aşağıdaki sanal makinenizin ana sayfa ekranına geçiş yapabilirsiniz.



![](/assets/azure_sanal_makina5.jpg)



Bu ekranda sanal makinenize bağlanabilir lan-wan ip adreslerini görebilir ve bir çok işleme erişebilirsiniz. Bağlan butonuna basarak RDP seçeneği ile makineye bağlanıyorum.

![](/assets/azure_sanal_makina6.jpg)



ve makinem açılıyor.

![](/assets/azure_sanal_makina7.jpg)



Teşekkürler...
