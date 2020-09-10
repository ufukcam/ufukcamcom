---
template: BlogPost
path: /sql-server-tetikleyicileri
date: 2020-09-10T18:03:35.912Z
title: SQL Server Tetikleyicileri
metaDescription: |
  SQL Server Tetikleyicileri
thumbnail: /assets/triggers.jpg
---
Merhabalar bu yazımda elimden geldiğince bahsedeceğim konu Trigger’lar 🙂 Genel olarak trigger yada Türkçe kullanacak olursak tetikleyiciler belirlediğimiz bir olay, bir durum meydana geldiği zaman yine bizim tarafımızdan belirlenen işlemleri yerine getiren, uygulayan bir kılavuzdur.

SQL Server’larda trigger’ı ele alacak olursak; tablolar üzerinde bir işlem gerçekleştiğinde ne yapacağımızı belirlediğimiz alanda kullanılır. Şimdi trigger türlerine bakalım.

**DML (Data Manipulation Language) Trigger :** INSERT, UPDATE, DELETE işlemleri sonrası devreye giren trigger’lardır.

**DDL (Data Definition Language) Trigger :** CREATE, ALTER, DROP işlemleri kullanıldığında devreye girer.

**Logon Trigger :** Login işlemleri sırasında devreye girer. Güvenlik ve kontrol amaçlı kullanılır.

**Şimdi sırasıyla 3 bölümü açalım. İlk olarak DML triggerlar ile başlayabiliriz.**

DML Triggerlar 2 çeşit olarak sınıflandırılmaktadır. Bunlar After Trigger ve Instead Of Triggerlardır.

**After Triggerlar** tablomuzda insert, update, delete işlemleri sonrasında kullanılmak içindir.

**Instead of Triggerları** ise insert, update, delete işlemlerini atlar ve direk tetikleyicide belirlediğimiz ifadeleri işlemeye koyar.

Yapı aşağıdaki şekilde olmalıdır.



```
CREATE TRIGGER trigger_name
ON table_name
{FOR |AFTER | INSTEAD OF}
{[INSERT],[UPDATE],[DELETE]}
AS
{sql_statements}
```



<!--StartFragment-->

**trigger_name :** tetikleyiciye vereceğimiz ad.

**table_name :** tetikleyicinin çalışacağı tablo adı

**for , after :** for yalnızca INSERT işleminde devreye girer. after ise INSERT ve DELETE işleminde çalışır.

**sql_statements:** trigger sonrası işleyecek t-sql kodlarımız

Şimdi örnek yapalım ;

<!--EndFragment-->



```
CREATE TRIGGER USER_CONTROL
ON USER
FOR INSERT
AS
DECLARE @USER_ID INT
SELECT @USER_ID=USER_ID FROM INSERTED
IF EXISTS(SELECT * FROM USER WHERE USER_ID=@USER_ID)
	BEGIN
		PRINT 'User with the same id already exists.'
		ROLLBACK
	END
```





Bu örnekte yeni kaydolan kullanıcı eğer tabloda var ise begin kısmında belirlediğimiz trigger sonucu devreye girecektir.

***DDL Trigger için yapı aşağdaki şekilde olmalıdır.***



```
CREATE TRIGGER trigger_name
ON { DATABASE |  ALL SERVER }
[WITH ddl_trigger_option]
FOR {event_type | event_group }
AS {sql_statement}
```





<!--StartFragment-->

**trigger name:** belirleyeciğimiz tetikleyici adımız.

**DATABASE | ALL SERVER :** tetikleyicimizin çalışacağı database, server, tablo yada view adı.

**event_type | event_group :** tetikleyicimizin hangi durumlarda çalışacağını belirlediğimiz bölümdür. (INSERT, UPDATE, DELETE)

**sql_statement :** ve olay gerçekleştiği zaman işleme alınacak sql kodlarımız.

<!--EndFragment-->

![](/assets/ddl-trigger-flow02.png)



<!--StartFragment-->

**İlk örneğimizi yapalım,**aşağıda oluşturacamız trigger alter ve drop işlemleri veritabanı üzerinde çalıştığında @message içerisinde belirlediğimiz alanı ekrana yazdıracak.

<!--EndFragment-->

```
CREATE TRIGGER user_add_trigger
ON DATABASE
FOR	
    ALTER_TABLE, 
    DROP_TABLE
AS
BEGIN
    DECLARE @Message VARCHAR(MAX)
	SET @Message='The tables in the test database have been modified.'
	PRINT @Message
END
```



<!--StartFragment-->

***Logon Trigger Örneğimize Başlayalım. Yapı Aşağıdaki Gibi ;***



<!--EndFragment-->

```
CREATE OR ALTER TRIGGER trigger_name
ON ALL SERVER 
FOR LOGON
AS
BEGIN
   sql_statement
END
```



<!--StartFragment-->

Daha önceki trigger yapılarıyla aynı bir yapıya sahip. login olayına yanıt olarak begin ve end kısımları arasındaki t-sql kodlarımız çalışacaktır.

İlk örneğimizle daha kolay anlayacağız… ;

<!--EndFragment-->



```
CREATE TRIGGER logon_trigger_test
ON ALL SERVER
FOR LOGON
AS
BEGIN
DECLARE @Error varchar(100)
SET @Error='Ufuk can only connected during certain hours.'
 
IF (( ORIGINAL_LOGIN() = 'ufuk')
AND
((DATEPART(HOUR, GETDATE()) BETWEEN 17 AND 24)
OR
(DATEPART(HOUR, GETDATE()) BETWEEN 0 AND 8)
))
BEGIN
PRINT @Error
ROLLBACK
END
```



Yukarıdaki örneğimde ufuk kullanıcısını sabah 9.00 ila akşam 17.00 a kadar olan zaman aralığında login izni ile ilgili bir trigger oluşturduk. ve @Error ile ona bir uyarı gönderdik.

Yazdığım yazılar umarım işinize yarıyordur. Sağlıkla kalın…



> sqlservertutorial
>
> docs.microsoft
>
> mssqltips
