import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Category } from 'src/app/core/services/pipe/interfaces/category';

@Component({
  selector: 'app-categories-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit{
     constructor(private _ActivatedRoute:ActivatedRoute , private _ProductService:ProductService){}
     categoryId:string | null='';
     categoryDetails: Category = {} as Category;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
     this.categoryId = params.get('id');
        console.log(this.categoryId);

      }
    }
    );
    this._ProductService.getCategoriesDetails(this.categoryId).subscribe({
      next:(response)=>{
            this.categoryDetails = response.data

      }
    })
  }



}
