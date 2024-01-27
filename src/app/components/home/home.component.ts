import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Products } from 'src/app/core/services/pipe/interfaces/products';
import { CutTextPipe } from 'src/app/core/services/pipe/cut-text.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/services/pipe/interfaces/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/services/pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CutTextPipe , CarouselModule , RouterLink, SearchPipe ,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _ProductService:ProductService,
     private _CartService:CartService ,
     private toastr: ToastrService,
     private _Renderer2:Renderer2
      ) {  }
  productsDate:Products[]= [];
  categoriesData:Category []=[]
  inputSearch:string =''

 ngOnInit(): void {
 this._ProductService.getProduct().subscribe({
  next:(response) =>{
  this.productsDate=   response.data;
    console.log(this.productsDate);

  },


 });
 this._ProductService.getCategories().subscribe({
  next:(response)=>{
      this.categoriesData=response.data
  }
 })
 }

 categoryOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  autoplay:true,
  autoplayTimeout:7000,
  autoplaySpeed:1000,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 5
    }
  },
  nav: true
}


 manyOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay:true,
  autoplayTimeout:2000,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: false
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

}
