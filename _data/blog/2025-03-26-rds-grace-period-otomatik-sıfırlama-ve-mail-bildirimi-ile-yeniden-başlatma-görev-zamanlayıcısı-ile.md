---
template: BlogPost
path: /terminal-server-lisans-otomatik-sifirlama
date: 2025-03-26T07:24:31.474Z
title: >-
  RDS Grace Period Otomatik Sıfırlama ve Mail Bildirimi ile Yeniden Başlatma
  (Görev Zamanlayıcısı ile)
metaDescription: "\U0001F4CC Terminal Server (RDS) ortamlarında lisanssız kullanımın ardından devreye giren 120 günlük grace period (ödeme süresiz dönem) bazı sistemlerde tekrar başlatılmak istenebilir. Bu yazıda, bu işlemi adım adım otomatikleştirip, mail bildirimli ve restartlı şekilde nasıl yapabileceğini anlatıyorum."
---


📌 **Terminal Server (RDS)** ortamlarında lisanssız kullanımın ardından devreye giren **120 günlük grace period** (ödeme süresiz dönem) bazı sistemlerde tekrar başlatılmak istenebilir. Bu yazıda, bu işlemi adım adım otomatikleştirip, mail bildirimli ve restartlı şekilde nasıl yapabileceğini anlatıyorum.

## 🎯 Hedefimiz

* RDS grace period'u PowerShell ile sıfırlamak
* İşlem sonunda e-posta göndermek
* Sunucuyu otomatik olarak yeniden başlatmak
* Bu işlemi **her 100 günde bir Görev Zamanlayıcı** ile otomatikleştirmek\
  \
  \
  Yönetici olarak çalıştırılmalı

  ```
  # Yönetici olarak çalıştırılmalı

  Param([Switch]$Force)
  Clear-Host
  $ErrorActionPreference = "SilentlyContinue"

  try {
      Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
  } catch {
      Write-Host -ForegroundColor Red "Execution Policy ayarlanamadı."
      exit 1
  }

  function Send-Mail {
      $ip = (Test-Connection -ComputerName (hostname) -Count 1).IPv4Address.IPAddressToString
      $smtpServer = "mail.xxxx.com"
      $smtpFrom = "xx@xxx.com"
      $smtpTo = "xx@xxx.com"
      $subject = "RDS Grace Period Sıfırlandı"
      $body = "Terminal Sunucudaki RDS Grace Periyodu başarıyla sıfırlandı.`nSunucu yeniden başlatılıyor.`nSunucu IP adresi: $ip"
      $smtpUser = "xxx@xxxx.com"
      $smtpPass = "xxxxxx" | ConvertTo-SecureString -AsPlainText -Force
      $cred = New-Object System.Management.Automation.PSCredential($smtpUser, $smtpPass)
      Send-MailMessage -From $smtpFrom -To $smtpTo -Subject $subject -Body $body -SmtpServer $smtpServer -UseSsl -Credential $cred -Port 587
  }

  if (([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
      $GracePeriod = (Invoke-CimMethod -InputObject (Get-CimInstance -Namespace root/CIMV2/TerminalServices -ClassName Win32_TerminalServiceSetting) -MethodName GetGracePeriodDays).DaysLeft
      if ($Force -or $true) {
          $definition = @"
  using System;
  using System.Runtime.InteropServices;
  namespace Win32Api {
      public class NtDll {
          [DllImport("ntdll.dll", EntryPoint="RtlAdjustPrivilege")]
          public static extern int RtlAdjustPrivilege(ulong Privilege, bool Enable, bool CurrentThread, ref bool Enabled);
      }
  }
  "@
          Add-Type -TypeDefinition $definition -PassThru
          $bEnabled = $false
          [Win32Api.NtDll]::RtlAdjustPrivilege(9, $true, $false, [ref]$bEnabled)

          $key = [Microsoft.Win32.Registry]::LocalMachine.OpenSubKey("SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\RCM\\GracePeriod", [Microsoft.Win32.RegistryKeyPermissionCheck]::ReadWriteSubTree,[System.Security.AccessControl.RegistryRights]::takeownership)
          $acl = $key.GetAccessControl()
          $acl.SetOwner([System.Security.Principal.NTAccount]"Administrators")
          $key.SetAccessControl($acl)
          $rule = New-Object System.Security.AccessControl.RegistryAccessRule ("Administrators","FullControl","Allow")
          $acl.SetAccessRule($rule)
          $key.SetAccessControl($acl)
          Remove-Item 'HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\RCM\\GracePeriod'
          Start-Sleep -Seconds 5

          Send-Mail
          Restart-Computer -Force
      }
  } else {
      Write-Host -ForegroundColor Red "Script'i yönetici olarak çalıştırın."
      exit 1
  }
  Remove-Variable * -ErrorAction SilentlyContinue

  ```

  2. `.bat` Dosyası ile Çağırma

  @echo off powershell.exe -NoProfile -ExecutionPolicy Bypass -File "C:\Scripts\Reset-RDS-GracePeriod.ps1" -Force



  ## . Görev Zamanlayıcı Ayarları

  1. **Görev Zamanlayıcı’yı açın**
  2. Sağ panelden **“Görev Oluştur…”** seçin

  ### Genel Sekme:

  * Ad: `RDS Grace Reset`
  * “**En yüksek ayrıcalıklarla çalıştır**” seçili olmalı

  ### Tetikleyiciler Sekmesi:

  * Yeni → **Günlük** → **Her 100 günde bir**

  ### Eylemler Sekmesi:

  * Yeni → Program/script: `cmd.exe`
  * **Add arguments**:

    ```
    /c "C:\Scripts\run.bat"

    ```
