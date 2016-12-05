import { Component, OnInit } 				from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CartPage } 		 				from '../cart/cart';
import { ApiProvider }   	 				from '../../providers/api-provider';
import { SelectedProductsProvider } 		from '../../providers/selected-products-provider';

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

	constructor(public navCtrl : NavController, public api : ApiProvider, public loadingCtrl : LoadingController, public sp : SelectedProductsProvider) {

	}

	// Chama o evento de carregamento concluído do Angular 2 para evitar que trave a aplicação
	ngOnInit() {

		this.cartPage = CartPage;
		this.products = [];
		this.getProducts();
	}

	// Quando a página for exibida, deve verificar os produtos já selecionados
	ionViewWillEnter() {

		this.matchSelected();	
	}

	// Chama o provider da API para obter os produtos a serem selecionados
	getProducts(match = false) {

		let loading = this.loadingCtrl.create({ content : 'Carregando...' });
		loading.present();

		this.api.getData().subscribe(
			// Função em caso de sucesso
			(products) => {

				this.products = products;

				if (match === true) {

					this.matchSelected();
				}

				loading.dismiss();
			},
			// Função em caso de erro
			(err) => {

				loading.dismiss();
				console.error(err);
			}
		);
	}

	// Ao selecionar um produto, atualiza a lista de produtos selecionados e o contador
	productSelected() {

		this.selectedProducts = this.products.filter((product) => product.checked == true);
		this.count 			  = this.selectedProducts.length;

		this.sp.set(this.selectedProducts);
	}

	// Verifica quais produtos já estão selecionados e marca a propriedade checked
	matchSelected() {

		let selectedIds = this.sp.get().map((product) => product.id);

		for(let i = 0; i < this.products.length; i++) {

			this.products[i].checked = (selectedIds.indexOf(this.products[i].id) >= 0);
		}

		this.count = selectedIds.length;
	}

	// Atualiza a lista, buscando os itens da API
	refresh() {

		this.getProducts(true);
	}
}