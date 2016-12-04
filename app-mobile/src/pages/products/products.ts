import { Component } 	 from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider }   from '../../providers/api-provider';

@Component({
	selector 	: 'page-products',
	templateUrl : 'products.html'
})

export class ProductsPage {

	products : any[];

	count : number;

	constructor(public navCtrl: NavController, public api:ApiProvider) {

		this.count = 0;
		this.getProducts();
	}

	getProducts() {

		this.api.getData().subscribe(
			(products) => this.products = products,
			(err) => console.error(err)
		);
	}
}