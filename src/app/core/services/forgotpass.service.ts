import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`
   forgotPass(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `forgotPasswords` , userData)
   };

   resetCode(userCode:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `verifyResetCode` , userCode)
   }

   newPass(newPass:object):Observable<any>{
    return this._HttpClient.put(this.baseUrl + `resetPassword` , newPass)
   }

}
