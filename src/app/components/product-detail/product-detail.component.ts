import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  
  @Input() id = -1;
  // product : Product | undefined = undefined

  product$ : Observable<Product> | undefined = undefined;

  constructor(private productService:ProductService,
    public authService:AuthService, 
    public route:ActivatedRoute
    ){

  }

  // ngOnChanges(changes: SimpleChanges): void {
   
  //  this.product$ = this.productService.getProductById(this.id);

  // }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.product$ = this.productService.getProductById(id);
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
