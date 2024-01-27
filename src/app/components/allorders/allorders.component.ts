import { Products } from './../../core/services/pipe/interfaces/products';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/core/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
// import { Products } from 'src/app/core/services/pipe/interfaces/products';
import { AllOrder } from 'src/app/core/services/pipe/interfaces/all-order';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent{
  constructor(private _CartService:CartService , private ActivatedRoute:ActivatedRoute ){}

  orderData:any;
 userData:any;
 userObj:any
 userDataId:string='';
 result:Products []=[]
 ngOnInit(): void {
  this._CartService.getAllOrder().subscribe({
    next:(response)=>{
        console.log(response.data);
    }

  })

  const encod =   localStorage.getItem('etoken');
  if(encod !== null){
    const decode = jwtDecode(encod);
      this.userData=decode
     this.userDataId=this.userData.id;

this._CartService.getUserOrders(this.userDataId).subscribe({
  next:(response)=>{
     console.log('data',response);
    //  const [{cartItems:[{product:{imageCover,title}}]}] = response
    //  console.log(imageCover , title);
    //  this.userObj={image:imageCover , title:title}
    //  console.log(this.userObj);
    const [{cartItems}] = response;
      this.userObj=cartItems



  }
})

  }


 }
 }

