import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://192.155.93.202:4200/api/';

  constructor(
    private _http : HttpClient
  ) { }

  getProductById<T>(id: string) {
    return this._http.get<T>(`${this.url}product/${id}`);
  }

  getAllProducts<T>(){
    return this._http.get<T>(`${this.url}products`);
  }

  createProduct<T>(product: any) {
    return this._http.post<T>( `${this.url}product`, product);
  }

  deleteProduct(id: string){
    return this._http.delete(`${this.url}product/${id}`);
  }

  updateProduct<T>(id:string, product:any){
    return this._http.put<T>( `${this.url}product/${id}`, product);
  }

}
