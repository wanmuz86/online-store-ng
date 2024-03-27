import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { priceRangeValidator } from '../../directives/price-range.directive';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{


  showPriceRangeHint = false;

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.price.valueChanges.subscribe(price=>{
      if (price){
        this.showPriceRangeHint = price > 1 && price < 10000; // true
      }
    })
  }

  // 1) Create the form normally (with reactive)
  //2 ) Import the necessary modules 
  // 3) Create a FormGroup and link this formGroup in html using [formGroup] directive, add formControlName in all the input in .html
  productForm = new FormGroup({
    name: new FormControl('', { nonNullable: true , 
      validators:Validators.required}),
    price: new FormControl<number | undefined>(undefined, 
      { nonNullable: true, validators:[Validators.required, 
        priceRangeValidator()] }),
    image_url: new FormControl('', { nonNullable: true })
  })

  // 4) Create the getter to retrieve the value from the form

  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }
  get imageUrl() { return this.productForm.controls.image_url }

  // 5) Implement the action via ngSubmit
  createProduct() {
    this.productService.createProduct(this.name.value,
      Number(this.price.value),
      this.imageUrl.value).subscribe(resp=>{
      console.log("Product added successfully")
        this.productForm.reset()
      },
      error => console.log('something is wrong')
      )
  }

}
