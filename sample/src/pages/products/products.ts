import { Component } 	 from '@angular/core';
import { NavController } from 'ionic-angular';
import utils 			 from '../../lib/utils';

@Component({
	selector : 'page-products',
	templateUrl: 'products.html'
})

export class ProductsPage {

	items : Array<{ title : string, description : string, value : number}>;

	constructor(public navCtrl : NavController) {

		this.items = [];

		for (let i = 0; i < 10; i++) {

			this.items.push({
				title : 'Produto ' + (i + 1),
				description : 'Produto bom!',
				value : utils.formatMoney(0.99 + i)
			});
		}
	}
}