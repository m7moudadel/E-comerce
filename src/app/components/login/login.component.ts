import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  errorMessage:string='';
  isLoading:boolean = false;
   loginForm:FormGroup= new FormGroup({
    email:new FormControl('' , [Validators.required , Validators.email ]),
    password:new FormControl('' , [Validators.required , Validators.pattern(/^\w{6,}$/)]),

   } )




   handelForm():void{
  const userDate= this.loginForm.value;
   this.isLoading=true
   if (this.loginForm.valid === true ) {
      this._AuthService.login(userDate).subscribe({
        next:(repsonse)=> {
           if (repsonse.message == 'success') {
            localStorage.setItem('etoken' , repsonse.token);
            this._AuthService.decodeUser()
            this.isLoading=false;
            this._Router.navigate(['/home'])
           }

         },
        error:(err)=>{
          console.log(err);
          this.isLoading=false;
          this.errorMessage =err.error.message
        }
      }
      )
   }
   }}
