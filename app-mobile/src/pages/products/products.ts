import { Component, OnInit } 		from '@angular/core';
import { NavController } 	 		from 'ionic-angular';
import { CartPage } 		 		from '../cart/cart';
import { ApiProvider }   	 		from '../../providers/api-provider';
import { SelectedProductsProvider } from '../../providers/selected-products-provider';

@Component({
	templateUrl : 'products.html'
})

export class ProductsPage implements OnInit {
	// Array com os produtos disponíveis para seleção
	products : any[];

	// Array com os produtos selecionados pelo usuário
	selectedProducts : any[];

	// Contador com o número de produtos selecionados
	count : number = 0;

	cartPage : any;

	constructor(public navCtrl : NavController, public api:ApiProvider, public sp:SelectedProductsProvider) {

	}

	// Chama o evento de carregamento concluído do Angular 2 para evitar que trave a aplicação
	ngOnInit() {

		this.cartPage = CartPage;
		this.products = [];
		this.getProducts();
	}

	// Chama o provider da API para obter os produtos a serem selecionados
	getProducts() {

		this.api.getData().subscribe(
			// Função em caso de sucesso
			(products) => this.products = products,
			// Função em caso de erro
			(err) => console.error(err)
		);
	}

	// Ao selecionar um produto, atualiza a lista de produtos selecionados e o contador
	productSelected() {

		this.selectedProducts = this.products.filter((product) => product.checked == true);
		this.count 			  = this.selectedProducts.length;

		this.sp.set(this.selectedProducts);
	}
}