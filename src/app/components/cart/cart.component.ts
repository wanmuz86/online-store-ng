import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cart: Product[] =  [];

  cartForm = new FormGroup({
    products: new FormArray<FormControl<number>>([])
  });

  constructor(private cartService:CartService){

  }

  ngOnInit(): void {
    // THe cart page - In the UI, I will show the product name and the quantity
    this.cart = this.cartService.products;
// For simplicty, I hardcode to 1
// By right, I will do logic in cartServie to update the number of product
// When user addProduct, I check if it exists, if exists, update quantity
// By right, number 1 will be replaced with the quantity
    this.cart.forEach(()=>{
      this.cartForm.controls.products.push(
        new FormControl(1, {nonNullable:true})
      );
    });
  }

}
