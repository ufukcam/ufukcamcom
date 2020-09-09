---
template: BlogPost
path: /hyper-v-generation-1-ve-2-farki
date: 2020-09-09T11:08:36.782Z
title: Hyper-V Generation 1 ve 2 Farkı
metaDescription: Hyper-V Generation 1 ve 2 Farkı
thumbnail: /assets/generations_hyper_v.jpg
---
![](/assets/hyper-gen.jpg)

Merhabalar arkadaşlar Hyper-V sanal makine oluşturma esnasında sistemin bize sorduğu 2 seçeneği elimden geldiğince anlatmaya çalışacağım.

Hyper-V platformunda Generation 1 ve Generation 2 olayı bütünüyle donanımsal farklılıklar göstermektedir.

Generation 2 sanal makineleri 1.nesillere göre daha güvenilir ve daha kullanışlı çalışır. Generation 2’de**IDE**sürücüleri için destek tamamen kaldırılmıştır ve ayrıca**BIOS**tabanlı yazılımlar yerine**UEFI Firmware**desteklemektedirler.

Size aşağıda Generation 1 ve Generation 2 sanal makinalarının desteklediği platformları, boot desteklerini ve donanım yapıları ile ilgili verileri**MS kaynaklı**paylaştım. Umarım işinize yarar.

Bu arada generation’lar arasında değişiklik yapılamaz. Generation 1 olarak kurulan bir sanal makine Generation 2 ye çevrilemez.

<!--StartFragment-->

| **64-bit versions of Windows** | **Generation 1** | **Generation 2** |
| ------------------------------ | ---------------- | ---------------- |
| Windows Server 2019            | +                | +                |
| Windows Server 2016            | +                | +                |
| Windows Server 2012 R2         | +                | +                |
| Windows Server 2012            | +                | +                |
| Windows Server 2008 R2         | +                | \-               |
| Windows Server 2008            | +                | \-               |
| Windows 10                     | +                | +                |
| Windows 8.1                    | +                | +                |
| Windows 8                      | +                | +                |
| Windows 7                      | +                | \-               |

<!--EndFragment-->

<!--StartFragment-->

| **32-bit versions of Windows** | **Generation 1** | **Generation 2** |
| ------------------------------ | ---------------- | ---------------- |
| Windows 10                     | +                | \-               |
| Windows 8.1                    | +                | \-               |
| Windows 8                      | +                | \-               |
| Windows 7                      | +                | \-               |

<!--EndFragment-->



<!--StartFragment-->

| Operating system versions       | **Generation 1** | **Generation 2**                       |
| ------------------------------- | ---------------- | -------------------------------------- |
| RHEL/CentOS 7.x series          | +                | +                                      |
| RHEL/CentOS 6.x series          | +                | +(sadece Windows Server 2016 ve üstü ) |
| RHEL/CentOS 5.x series          | +                | \-                                     |
| Debian 7.x series               | +                | \-                                     |
| Debian 8.x series               | +                | +                                      |
| FreeBSD 10 and 10.1             | +                | \-                                     |
| FreeBSD 9.1 and 9.3             | +                | \-                                     |
| FreeBSD 8.4                     | +                | \-                                     |
| Oracle Linux 7.x series         | +                | +                                      |
| Oracle Linux 6.x series         | +                | \-                                     |
| Ubuntu 14.04 and later versions | +                | +                                      |
| Ubuntu 12.04                    | +                | \-                                     |

<!--EndFragment-->



<!--StartFragment-->

| **Boot method**                              | **Generation 1** | **Generation 2** |
| -------------------------------------------- | ---------------- | ---------------- |
| Standard Network Adapter ile PXE Önyüklemesi | \-               | +                |
| Legacy Network Adapter ile PXE Önyüklemesi   | +                | \-               |
| VHDX yada ISO                                | \-               | +                |
| IDE Controller'dan VHD yada ISO              | +                | \-               |
| Boot from floppy (.VFD)                      | +                | \-               |

<!--EndFragment-->



<!--StartFragment-->

| **Generation 1 Donanımı** | **Generation 2 Değişenleri** | **Generation 2 Geliştirmeleri** |
| ------------------------- | ---------------------------- | ------------------------------- |
| IDE controller            | Virtual SCSI controller      | .vhdx 'den boot                 |
| IDE CD-ROM                | Virtual SCSI CD-ROM          | SCSI sanal DVD’den ön yükleme   |
| Legacy BIOS               | UEFI firmware                | Secure Boot                     |

<!--EndFragment-->
