import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Products } from 'src/app/core/services/pipe/interfaces/products';
import { RouterLink } from '@angular/router';
import { CutTextPipe } from 'src/app/core/services/pipe/cut-text.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , CutTextPipe ,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private _ProductService:ProductService,
    private _CartService:CartService ,
    private toastr: ToastrService,
    private _Renderer2:Renderer2){}
    productsDate:Products[]= [];
    itemsPerPage:number=1;
    currentPage:number = 1;
    totalItems:number=0



  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
     next:(response) =>{
     this.productsDate=   response.data;
     console.log(this.productsDate);

     this.itemsPerPage = response.metadata.limit
     this.currentPage = response.metadata.currentPage
     this.totalItems = response.results
     },
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

     pageChanged(event:any):void{
      console.log(event);
      this._ProductService.getProduct(event).subscribe({
        next:(response) =>{
        this.productsDate=   response.data;
        console.log(this.productsDate);

        this.itemsPerPage = response.metadata.limit
        this.currentPage = response.metadata.currentPage
        this.totalItems = response.results
        },
       })
     }

}
