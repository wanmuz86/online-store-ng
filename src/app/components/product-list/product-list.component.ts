import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

// Import, Inject, Implement
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];
  selectedProductId : number | undefined;

   //2) Injection - private/public - To call in .ts only/ call in .ts and .html
   // productService - variable name / ProductService - Type
   // var productService = new ProductService() 
  constructor(private productService:ProductService){

  }
  // 3) Implement / call the function on ngOnInit
  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(
      response => this.products = response,
      error => console.log(error)
    )
  }
  selectProduct(id:number) {
    this.selectedProductId = id;
  }

}
