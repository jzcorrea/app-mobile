import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Realiza conexões com a API
 */
@Injectable()
export class ApiProvider {

	// Endereço da API
	apiURL : string = 'http://172.20.10.3:80/app-mobile-api/';

  	constructor(public http: Http) {
  	}

  	/**
  	 * Realiza uma chamada GET à API para retornar os dados dos produtos cadastrados
  	 * @return {Promise} Promise com a busca
  	 */
  	getData() {

		return this.http.get(this.apiURL + 'produtos.php').map((response) => response.json());
	}
}
