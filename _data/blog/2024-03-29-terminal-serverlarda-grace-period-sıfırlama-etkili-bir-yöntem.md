---
template: BlogPost
path: /terminal-server-lisans-resetleme-grace-period
date: 2024-03-29T12:19:09.474Z
title: 'Terminal Serverlarda Grace Period Sıfırlama: Etkili Bir Yöntem'
metaDescription: >
  Terminal Server ortamlarında Grace Period (Zaman Aşımı Süresi), özellikle
  lisanslama konusunda kritik bir rol oynar. Bu süre, kullanıcıların lisans
  altyapısının tam olarak kurulması için geçici bir süre sağlar. Ancak, bazı
  durumlarda, bu sürenin sıfırlanması gerekebilir. Bu makalede, bu sürecin nasıl
  yönetileceğini ve potansiyel hataların nasıl çözüleceğini detaylıca
  inceleyeceğiz.
---
**1. Grace Period Sıfırlama Scripti:**Öncelikle, Terminal Server ortamlarında Grace Period’u sıfırlamak için özel bir PowerShell scripti kullanacağız. Bu script, süreci basit ve etkili bir şekilde gerçekleştirmenizi sağlar.

**Scriptin Kullanımı:**

* Scripti [buradan](https://gist.github.com/ufukcam/70ebc525ff1a1879fab571042b00b8d1) indirin.
* Scripti, PowerShell'i yönetici olarak çalıştırarak açın. Bunu yapmak için, Windows menüsünde PowerShell'e sağ tıklayın ve "Yönetici olarak çalıştır" seçeneğini seçin.

**2. Potansiyel Hata ve Çözümü:** Eğer scripti çalıştırdığınızda "dijital olarak imzalanmamış" hatası alırsanız, bu, PowerShell'in güvenlik politikası nedeniyledir. Bu durumda aşağıdaki adımları izleyin:

* PowerShell'i yönetici olarak tekrar açın.

  * Aşağıdaki komutu girerek yürütme politikasını geçici olarak değiştirin:

    ```powershell
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```

    Ardından, scripti tekrar çalıştırın:

    ```powershell
    .\ts-reset-period.ps1 -Force
        
    ```

**3. Güvenlik Önlemleri:**

* Yukarıdaki işlem, yalnızca güvendiğiniz scriptler için kullanılmalıdır.
* İşlemden sonra, güvenlik için yürütme politikanızı eski haline getirmeyi unutmayın:

  ````
  ```powershell
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Restricted

  ```
  ````

**Sonuç:** Grace Period sıfırlama, Terminal Server yönetiminde önemli bir işlevdir. Bu makalede anlatılan adımlar, bu süreci kolay ve güvenli bir şekilde gerçekleştirmenizi sağlar. Güvenliğinizi göz ardı etmeden, bu yöntemleri kullanarak Terminal Server ortamınızı daha verimli yönetebilirsiniz.
