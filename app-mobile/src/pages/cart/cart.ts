import { Component, OnInit } 		from '@angular/core';
import { NavController } 	 		from 'ionic-angular';
import { ProductsPage } 		 	from '../products/products';
import { SelectedProductsProvider } from '../../providers/selected-products-provider';

@Component({
	templateUrl: 'cart.html'
})

export class CartPage implements OnInit {

	products : any[];

	count : number = 0;

	total : number = 0;

	productsPage : any;

	constructor(public navCtrl : NavController, public sp:SelectedProductsProvider) {

	}

	ngOnInit() {

		this.productsPage 	= ProductsPage;
		this.products 	 	= this.sp.get();
		this.count 	  	 	= this.products.length;

		this.calculateTotalValue();
	}

	// Calcula o valor total com base na soma dos valores dos produtos
	calculateTotalValue() {

		this.total = this.products.map((product) => product.value).reduce((a, b) => a + b, 0);
	}
}