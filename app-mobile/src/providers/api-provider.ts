import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  	Provider para buscar os dados na API PHP
*/
@Injectable()
export class ApiProvider {

	apiURL : string = 'http://localhost/app-mobile-api/';

  	constructor(public http: Http) {
  	}

  	getData() {

		return this.http.get(this.apiURL + 'produtos.php').map((response) => response.json());
	}
}
