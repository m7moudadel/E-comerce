import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule , CarouselModule ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute ,
    private _ProductService:ProductService ,
     private _CartService:CartService,
          private toastr: ToastrService,
     private _Renderer2:Renderer2
     ){}
  productsId!: string | null;
   productDetails:any= null
  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
    next:(para)=>{
  this.productsId = para.get('id');
   console.log(this.productsId);
    }
   });

   this._ProductService.getspecificProduct(this.productsId).subscribe({
    next:({data})=>{
   this.productDetails= data
   console.log(this.productDetails);

    }
   })
  }




  addProduct(id:any , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true')

    this._CartService.addCart(id).subscribe({
      next:(response)=>{
          console.log(response);
          this.toastr.info(response.message)
          this._Renderer2.removeAttribute(element , 'disabled');
           this._CartService.cartNumber.next(response.numOfCartItems)
      },error:()=>{
        this._Renderer2.removeAttribute(element , 'disabled')

      }
    })

   }















  detailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
   items:1,

  }
}
