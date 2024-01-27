import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';
import { CutTextPipe } from 'src/app/core/services/pipe/cut-text.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterLink , CutTextPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
 constructor(private _CartService:CartService , private _Renderer2:Renderer2){}
 cartDetails:any = null;

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next:(response)=> {
       this.cartDetails = response.data;
      },
    })
  }

  removeItem(id:string , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element, 'disabled' , 'true')

   this._CartService.removeCartIrem(id).subscribe({
    next:(response)=>{
    this.cartDetails = response.data
    this._Renderer2.removeAttribute(element, 'disabled')
    this._CartService.cartNumber.next(response.numOfCartItems)

    },error:()=>{
      this._Renderer2.removeAttribute(element, 'disabled')

    }
   })
  }

  changeCount(count:number , id:string , element1:HTMLButtonElement , element2:HTMLButtonElement):void{


    if(count >= 1){
      this._Renderer2.setAttribute(element1 , 'disabled' , 'true')
      this._Renderer2.setAttribute(element2 , 'disabled' , 'true')

        this._CartService.changeCartCount(id, count).subscribe({
          next:(response)=>{
              this.cartDetails=  response.data;
              this._Renderer2.removeAttribute(element1 , 'disabled')
              this._Renderer2.removeAttribute(element2 , 'disabled')

          },error:()=>{
            this._Renderer2.removeAttribute(element1 , 'disabled')
            this._Renderer2.removeAttribute(element2 , 'disabled')

          }
         })
      }

  }

  clrearCart():void{
    console.log('Clear');
     this._CartService.clearCart().subscribe({
      next:(response)=>{
      if(response.message === "success" ){
        this.cartDetails =null;
        this._CartService.cartNumber.next(0)
      }
      }
     })
  }


}
