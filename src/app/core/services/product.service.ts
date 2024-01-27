import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  basedUrl:string='https://ecommerce.routemisr.com/api/v1/'



  getProduct(pageNum:number = 1):Observable<any>{
  return this._HttpClient.get(this.basedUrl + `products?page=${pageNum}`)
  }

  getspecificProduct(id:string | null):Observable<any>{
    return this._HttpClient.get(this.basedUrl+`products/${id}`)
    }



  getCategories():Observable<any>{
  return this._HttpClient.get(this.basedUrl + 'categories')
  }

  getCategoriesDetails(id:string | null):Observable<any>{
    return this._HttpClient.get(this.basedUrl + `categories/${id}`)
  }
}

