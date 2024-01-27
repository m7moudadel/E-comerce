import { Products } from 'src/app/core/services/pipe/interfaces/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(Products:Products[],term:string ): Products[] {
    return Products.filter((item)=> item.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))  }

}
