import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgotpassService } from 'src/app/core/services/forgotpass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-passowrd',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './forgot-passowrd.component.html',
  styleUrls: ['./forgot-passowrd.component.scss']
})
export class ForgotPassowrdComponent {
  constructor(private _ForgotpassService:ForgotpassService,private _Router:Router){}
 step1:boolean = true;
 step2:boolean = false;
 step3:boolean = false;
 email:string = ''
 userMsg:string ='';

 forgotPassowrdForm:FormGroup = new FormGroup({
     email:new FormControl('' )
 })
 resetCodeConfirme:FormGroup = new FormGroup({
     resetCode:new FormControl('')
 })

 resetPassowrd:FormGroup = new FormGroup({
     password:new FormControl('', [ Validators.pattern((/^\w{6,}$/))] )
 })

forgotPassowrd():void{
  let userEmai = this.forgotPassowrdForm.value;
  this.email = userEmai.email
   this._ForgotpassService.forgotPass(userEmai).subscribe({
    next:(response)=>{
        console.log(response);
     this.userMsg =response.message;
     this.step1 = false;
     this.step2 = true;
    },error:(err)=>{
       this.userMsg =err.error.message
    }

   })
}

resetCode():void{
  let userCode = this.resetCodeConfirme.value
  this._ForgotpassService.resetCode(userCode).subscribe({
    next:(response)=>{
      console.log(response);
        this.userMsg =response.message;
        this.step2= false;
        this.step3 = true
    },error:(err)=>{
        console.log(err);
         this.userMsg = err.error.message
    }
  })
}

newPassword():void{
  let resetForm =this.resetPassowrd.value;
  resetForm.email=this.email


  this._ForgotpassService.newPass(resetForm).subscribe({
    next:(reponse)=>{
          console.log(reponse);
    },error:(err)=>{
            this.userMsg=err.error.message
    }
  })
}
};


