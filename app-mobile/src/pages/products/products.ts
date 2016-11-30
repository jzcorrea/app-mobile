import { Component } 	 from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector 	: 'page-products',
	templateUrl : 'products.html'
})

export class ProductsPage {

	products : Array<{ name : string, description : string, checked : boolean}>;

	constructor(public navCtrl: NavController) {

		this.products = [
			{
				name : 'Mouse Logitech',
				description : 'Um mouse bom!',
				checked : true
			},
			{
				name : 'Notebook Dell',
				description : 'Um notebook bom!',
				checked : true
			},
			{
				name : 'Macbook Air',
				description : 'Um Macbook bom!',
				checked : false
			}
		];
	}


}