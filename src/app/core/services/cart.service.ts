import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bassedUrl:string=`https://ecommerce.routemisr.com/api/v1/`
  constructor(private _HttpClient:HttpClient) { }
  cartNumber :BehaviorSubject<number> = new BehaviorSubject(0)


  addCart(productId:string):Observable<any>{
    return this._HttpClient.post(this.bassedUrl +`cart` ,
    {
      productId: productId
    }

    )
  }

  getCart():Observable<any>{
    return this._HttpClient.get(this.bassedUrl+ `cart`
    )
  }

  removeCartIrem(prodId:string):Observable<any>{
    return this._HttpClient.delete(this.bassedUrl + `cart/${prodId}`
    )
    }

    changeCartCount(prodId:String , countNum:number):Observable<any>{
      return this._HttpClient.put(this.bassedUrl + `cart/${prodId}` ,
      {

          count: countNum

      }
      )
    }


    clearCart():Observable<any>{
      return this._HttpClient.delete(this.bassedUrl+ `cart`
      )
    }


    checkOut(cartId:string|null , orderInfo:object):Observable<any>{
      return this._HttpClient.post(this.bassedUrl +
      `orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress:orderInfo

      }
       )
    }

    getAllOrder():Observable<any>{
      return this._HttpClient.get(this.bassedUrl +`orders/`)
    }

    getUserOrders(userId:string | null):Observable<any>{
      return this._HttpClient.get(this.bassedUrl + `orders/user/${userId}`)
    }
}
