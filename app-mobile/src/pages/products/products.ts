import { Component } 	 from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector 	: 'page-products',
	templateUrl : 'products.html'
})

export class ProductsPage {

	products : Array<string>;

	constructor(public navCtrl: NavController) {

		this.products = ['produto 1', 'produto 2', 'produto 3'];
	}
}