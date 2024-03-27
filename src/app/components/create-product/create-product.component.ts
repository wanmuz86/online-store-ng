import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
// 1) Create the form normally (with reactive)
//2 ) Import the necessary modules 
  // 3) Create a FormGroup and link this formGroup in html using [formGroup] directive, add formControlName in all the input in .html
  productForm = new FormGroup({
    name: new FormControl('', {nonNullable:true}),
    price: new FormControl<number | undefined>(undefined, {nonNullable:true}),
    image_url: new FormControl('', {nonNullable:true})
  })

  // 4) Create the getter to retrieve the value from the form

  get name() { return this.productForm.controls.name}
  get price() { return this.productForm.controls.price}
  get imageUrl() {return this.productForm.controls.image_url}

  // 5) Implement the action via ngSubmit
  createProduct(){
    console.log(this.name.value)
    console.log(this.price.value)
    console.log(this.imageUrl.value)
  }

}
