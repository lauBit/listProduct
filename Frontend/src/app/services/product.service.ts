import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3977/api/';

  constructor(
    private _http : HttpClient
  ) { }

  getAllProducts(){
    return this._http.get(
      this.url + 'products'
    ).pipe(map(res => res));
  }

  getProductById(id){
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    };
    return this._http.get(
      this.url + 'product/' + id,
    ).pipe(map(res => res));
  }

  createProduct(product) {
    let params = JSON.stringify(product);
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
    };
    return this._http.post(
      this.url + "product",
      params,
      options
    ).pipe(map(res => res));
  }

  deleteProduct(id){
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    };
    return this._http.delete(
      this.url + 'product/' + id,
      options
    ).pipe(map(res => res));
  }



  updateProduct(id, product){
    let params = JSON.stringify(product);
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    };
    return this._http.put(
      this.url + 'product/' + id, 
      params,
      options
    ).pipe(map(res => res));
  }

}
