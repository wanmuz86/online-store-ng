import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnChanges{
  
  @Input() id = -1;
  product : Product | undefined = undefined

  constructor(private productService:ProductService){

  }
  ngOnChanges(changes: SimpleChanges): void {
   
    this.productService.getProductById(this.id).subscribe(
      response => this.product = response,
      error => console.log(error)
    )
  }

  

  
}
