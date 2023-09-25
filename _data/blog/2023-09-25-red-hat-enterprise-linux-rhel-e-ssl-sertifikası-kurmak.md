---
template: BlogPost
path: /rhel-linux-ssl-yukleme
date: 2023-09-25T08:14:33.376Z
title: ' Red Hat Enterprise Linux (RHEL)''e SSL Sertifikası Kurmak '
metaDescription: >
  Red Hat Enterprise Linux (RHEL) üzerinde bir SSL sertifikası kurmak için
  aşağıdaki adımları takip edebilirsiniz. Bu örnekte, Apache HTTP Sunucusu'nu
  kullanarak bir SSL sertifikası kurmayı ele alacağım. Apache HTTP Sunucusu,
  RHEL'de yaygın olarak kullanılan bir web sunucusudur.
---
Red Hat Enterprise Linux (RHEL) üzerinde bir SSL sertifikası kurmak için aşağıdaki adımları takip edebilirsiniz. Bu örnekte, Apache HTTP Sunucusu'nu kullanarak bir SSL sertifikası kurmayı ele alacağım. Apache HTTP Sunucusu, RHEL'de yaygın olarak kullanılan bir web sunucusudur.

**Not**: Önce SSL sertifikası edinmeniz gerekecektir. Genellikle bu tür sertifikalar bir sertifika yetkilisi (Certificate Authority, CA) veya ücretsiz sertifikalar sunan bir hizmet tarafından sağlanır (örneğin, Let's Encrypt yada başka bir sağlayıcı).

1. **Apache ve Mod SSL Kurulumu**: Eğer kurulu değilse, Apache web sunucusunu ve Apache'nin SSL modülünü kurun. Aşağıdaki komutları kullanarak kurulum yapabilirsiniz:

   ```kotlin
   sudo yum install httpd mod_ssl
   ```


2. **SSL Sertifikasını Sunucuya Yükleme**: SSL sertifikasını ve özel anahtarınızı sunucunuza yükleyin. Bu dosyaları güvenli bir şekilde saklayın.

   * SSL sertifikanızı sunucunuzdaki `/etc/pki/tls/certs` dizinine, özel anahtarınızı `/etc/pki/tls/private` dizinine kopyalayın. Dosya adlarını uygun bir şekilde değiştirin (genellikle `example.com.crt` ve `example.com.key` gibi).
3. **Apache SSL Ayarlarını Yapılandırma**: Apache'nin SSL ayarlarını yapılandırmanız gerekecektir. Bu ayarları düzenlemek için aşağıdaki komutları kullanabilirsiniz:



   ```
   sudo vi /etc/httpd/conf.d/ssl.conf
   ```
4. Dosya içeriğini aşağıdaki gibi düzenleyin:

   ```
   <VirtualHost *:443>
       ServerAdmin admin@example.com
       DocumentRoot /var/www/html
       ServerName example.com

       SSLEngine on
       SSLCertificateFile /etc/pki/tls/certs/example.com.crt
       SSLCertificateKeyFile /etc/pki/tls/private/example.com.key

       <FilesMatch "\.(cgi|shtml|phtml|php)$">
           SSLOptions +StdEnvVars
       </FilesMatch>

       BrowserMatch "MSIE [2-6]" \
           nokeepalive ssl-unclean-shutdown \
           downgrade-1.0 force-response-1.0
       BrowserMatch "MSIE [17-9]" ssl-unclean-shutdown
   </VirtualHost>
   ```

   Yapılandırmayı kaydedin ve çıkın.
5. **Apache HTTP Sunucusunu Yeniden Başlatma**: Yapılandırmaları kaydettikten sonra Apache HTTP sunucusunu yeniden başlatın:

   ```
   sudo systemctl restart httpd
   ```

   Artık SSL sertifikasıyla güvenli bir şekilde çalışan bir web sunucunuz var. Tarayıcıda `https://example.com` gibi bir URL'yi ziyaret ederek test edebilirsiniz. İlgili sertifikanın doğru bir şekilde çalıştığından emin olun.

Bu adımlar, RHEL üzerinde SSL sertifikası kurmanıza yardımcı olacaktır. Sertifikanın ve özel anahtarın güvenliği çok önemlidir, bu nedenle bu dosyaları dikkatlice saklamak önemlidir. Ayrıca, güncellemeleri ve güvenlik düzeltmelerini düzenli olarak takip etmek önemlidir.
