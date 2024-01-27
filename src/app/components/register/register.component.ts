import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}
  errorMessage:string='';
  isLoading:boolean = false;
   registerForm:FormGroup= new FormGroup({
    name:new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ]),
    email:new FormControl('' , [Validators.required , Validators.email ]),
    password:new FormControl('' , [Validators.required , Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('' , [ Validators.required ,Validators.pattern((/^01[0125][0-9]{8}$/))]),

   } ,{ validators:[this.confirmePassword]} as FormControlOptions)

   confirmePassword(group:FormGroup):void{
     const password = group.get('password');
     const rePassword= group.get('rePassword')

     if (rePassword?.value == '') {
          rePassword.setErrors({required:true})
     }else if(password?.value != rePassword?.value){
      rePassword?.setErrors({missmatch:true})
     }
   };


   handelForm():void{
  const userDate= this.registerForm.value;
   this.isLoading=true
   if (this.registerForm.valid === true ) {
      this._AuthService.registerForm(userDate).subscribe({
        next:(repsonse)=> {
           console.log(repsonse);
           this.isLoading=false;
          this._Router.navigate(['/login'])
        },
        error:(err)=>{
          console.log(err);
          this.isLoading=false;
          this.errorMessage =err.error.message
        }
      }
      )
   }
   }
  }
