# TestProject
Proje Netlify Üzerinde Canlıya alınmıştır. Canlı Proje Linki : https://kartaca-test-project.netlify.app/

Localde Çalıştırmak için  => "npm install" Ardından "ng serve --open" komutlarının proje dizini içinde kullanılması yeterlidir.

## Proje Üzerinde Yapılanlar 
* Sol Taraftaki Menü üzerindeki yazıların bazılarını açılır kapanır şekilde düzenledim. Default olarak sayfa açıldığında kapalı olarak geliyor. 
* Olabildiğince tıklanılabilir menü eklemeye çalıştım. Kullanıcı adı yazısı , Ayarlar , Bildirim butonlarında menüler bulunmakta.
* Fully - Responsive yapmaya çalıştım. Üç farklı tarayıcıda denedim. Tablet boyutunda yapılara dokunmazken, Telefon boyutları için yine bazı elemenleri kaldırarak , Açılır kapanır , dropdown menüler ekledim. Kullanıcı tarafında ulaşılması ve kullanılmasının daha kolay olacağını düşündüm. 
* Sayfa üzerindeki Box-Button 'lar tıklanılabilir olduğu gibi , data alıp gönderme yapılarını örneklemek amacıyla , Modal popuplar ekledim. Butonlar üzerindeki yazılar , yazdığım angular servisi üzerinde proje dosyası içerisindeki "data.json" üzerinden çekilip ekrana düşürülüyor. Bu sayede yeni buton eklenmek istenirse sadece "data.json" içinde yeni buton verisi eklenmesi yeterli.
* Bu yapı değiştirilmek istenilirse (Web API için) , httpClient kullanımı sayesinde aynı servis içinde , localden çekilip subscribe olunan datalar yerine ; httpClient ile api'ye subscribe olup dataları aynı şekilde çekmek yeterli.
## Saygılarımla.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
