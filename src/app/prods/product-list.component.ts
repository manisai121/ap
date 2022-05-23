import { Component,OnInit } from '@angular/core';
import {IProduct} from './product'
import { ProductService } from './product.service';


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css']
  
})
export class productlistComponent implements 
OnInit{
    pagetitle: string='PRODUCT LIST!!!!!';
    imageWidth=40;
    imageMargin=3;
    showImage:boolean=false;

    private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter',value);
    this.filteredProducts = this.performFilter(value);
  }
onnotify(message:string):void{}

filteredProducts: IProduct[] = [];
prods: IProduct[] = [];

constructor(private productService: ProductService) {}
    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.prods.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
      this.prods=this.productService.getProducts();
      this.filteredProducts=this.prods;
    }
    toggleImage():void{
      this.showImage=!this.showImage;
    }
 
}
