---
template: BlogPost
path: /exchange-varsayilan-kota-ayarlama
date: 2021-11-09T22:22:30.486Z
title: Microsoft Exchange'de varsayılan kota ayarlanmamış kullanıcılar nasıl bulunur
metaDescription: >-
  PowerShell - Microsoft Exchange'de varsayılan kota ayarlanmamış kullanıcılar
  nasıl bulunur?
thumbnail: /assets/undraw_People_search_re_5rre.png
---
Exchange 2010'da kullanıcı oluştururken kullanıcı varsayılan database kotasını kullanmaktadır. Bazı durumlarda ihtiyaçlardan dolayı varsayılan kotalar değiştirilebiliyor. Bir süre sonra bu durum sunucu disk yapımızda yer sorunlarına yol açabilmektedir. Bu tipte kullanıcıları varsayılan kotalarına geri çekmek teker teker zahmetli olacağından dolayı PowerShell ile bunu bir kaç adımda halledebiliriz.

İlk olarak bu kullanıcıları basit bir komut ile listeleyebiliriz.

```powershell
get-mailbox -ResultSize Unlimited | where {$_.UseDatabaseQuotaDefaults -ne $true}
```



Listelenen bu kullanıcıları varsayılan database kotalarına geri çekmek için ise aşağıdaki komutu kullanabiliriz.



```powershell
get-mailbox -ResultSize Unlimited | where {$_.UseDatabaseQuotaDefaults -ne $true} | Set-Mailbox -UseDatabaseQuotaDefaults $true
```
