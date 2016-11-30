// Importa as bibliotecas do core do Ionic e do Angular
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
// Importa a página com a lista de produtos
import { ProductsPage } from '../pages/products/products';

@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {

    rootPage = ProductsPage;

    constructor(platform: Platform) {
  
        platform.ready().then(() => {
    
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
