import { Component, OnInit } 			 	from '@angular/core';
import { NavController, ToastController } 	from 'ionic-angular';
import { ProductsPage } 		 			from '../products/products';
import { SelectedProductsProvider } 		from '../../providers/selected-products-provider';

@Component({
	selector 	: 'page-cart',
	templateUrl : 'cart.html'
})

export class CartPage implements OnInit {

	products : any[];

	count : number = 0;

	total : number = 0;

	productsPage : any;

	constructor(public navCtrl : NavController, public toastCtrl : ToastController, public sp : SelectedProductsProvider) {

	}

	ngOnInit() {

		this.productsPage 	= ProductsPage;
		this.products 	 	= this.sp.get();
		this.setCount();

		this.calculateTotalValue();
	}

	// Remove um produto da lista de selecionados pelo id
	removeProduct(id) {

		// Exibe o aviso de que o produto foi removido do carrinho
		let toast = this.toastCtrl.create({ 
			message 		: 'Produto removido do carrinho!', 
			duration 		: 2000, 
			position 		: 'top',
			showCloseButton : true,
			closeButtonText : 'OK' 
		});

		toast.present();

		this.products = this.products.filter((product) => product.id != id);
		this.sp.set(this.products);
		this.setCount();
		this.calculateTotalValue();
	}

	// Define o valor da variável contadora
	setCount() {

		this.count = this.products.length;
	}

	// Calcula o valor total com base na soma dos valores dos produtos
	calculateTotalValue() {

		this.total = this.products.map((product) => product.value).reduce((a, b) => a + b, 0);
	}
}