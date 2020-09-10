---
template: BlogPost
path: /prettier-eslint
date: 2020-09-10T17:40:50.174Z
title: Prettier ve Eslint ile Çalışmaya Çalışmam
metaDescription: |
  Prettier ve Eslint ile Çalışmaya Çalışmam
thumbnail: /assets/eslin_prettier_ufukcam.jpg
---
Prettier bilindiği üzere bir kod formatlama aracıdır. Yazdığımız kodu standartlarına uygun hale getirmektedir.

ESLint ise JavaScript kodlarımızdaki hataları bulmamıza yardımcı olabilecek bir [linter](https://gomakethings.com/javascript-linters/) aracıdır.

Visual Studio Code kullanırken ikisini aynı anda kullanamıyordum. Aşağıdaki şekilde yaparsanız sorunsuz bir şekilde çalışmakta. Gelin birlikte yapalım…

İlk olarak eslint paketimizi proje dizinimize yüklüyoruz.

```
npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier

```





Daha sonra projemizin içine**.eslintrc**adında bir dosya oluşturuyoruz ve aşağıdaki gibi config ediyoruz.

```
{
  "extends": [
    "plugin:prettier/recommended" 
  ],
 
  "plugins": ["prettier"],
 
  "rules": {
    "prettier/prettier": "error"
  }
}
```





Daha sonra proje dizinimize**.prettierrc**adında yeni bir dosya daha oluşturuyor ayarlarımı yapıyorum. Diğer ayarlara[buradan](https://prettier.io/docs/en/options.html)bakabilirsiniz.



```
{
  "semi": true, // ; koy
  "singleQuote": true, // Çift tırnak yerine tek tırnak kullan
  "tabWidth": 4, // 4 girintiyle başla
  "useTabs": false, // satır boşlukları
  "bracketSpacing": true, // object girintileri
  "arrowParens": "avoid", // ES6 arrow functionlarda parantezi kaldırma
  "endOfLine": "auto"
}
```





Bunları yaptıktan sonra VS Code settins.json dosyasına giderek CTRL+S olayından sonra otomatik olarak kodlarımız formatlamasını sağlıyorum.



```
(File > Preferences > Settings daha sonra sağ köşeden Open Settings)

```

```
"editor.formatOnSave": true,

```



Tam hali ;



```
"[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
    }
```





Bu şekilde temiz kodlar yazabiliriz. Esen kalın…

\
Kaynak : https://prettier.io/, Chris Dev To, https://eslint.org/
