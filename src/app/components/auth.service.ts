import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
   baserUr:string ='https://ecommerce.routemisr.com/api/v1/auth/';
   userInfo:any
  registerForm(userDate:object):Observable<any>{
    return this._HttpClient.post(this.baserUr +'signup' , userDate)
  };

  login(userDate:object):Observable<any>{
  return this._HttpClient.post(this.baserUr+'signin', userDate)
  }

  decodeUser():void{
    const encode =localStorage.getItem('etoken');

    if(encode !== null){
   const decode=jwtDecode(encode);
   this.userInfo = decode


    }
  }
}
