import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnChanges{
  
  @Input() id = -1;
  // product : Product | undefined = undefined

  product$ : Observable<Product> | undefined = undefined;

  constructor(private productService:ProductService){

  }
  ngOnChanges(changes: SimpleChanges): void {
   
   this.product$ = this.productService.getProductById(this.id);
   
  }
  changePrice(price:number){
    // THE API CALL happen
    console.log(price)
    this.productService.updateProduct(this.id, price)
    .subscribe(
      response => alert("Product successfully updated"),
      error => console.log("Something is wrong")
    )
  }
  
}
