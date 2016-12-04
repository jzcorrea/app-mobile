import { Injectable } from '@angular/core';

@Injectable()
export class SelectedProductsProvider {

	selectedProducts : any[];

  	constructor() {}

  	set(products) {

  		this.selectedProducts = products;
  	}

  	get() {

  		return this.selectedProducts;
  	}
}
