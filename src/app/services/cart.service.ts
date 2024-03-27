import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  products: Product[] = []

  addProduct(product:Product){
    this.products.push(product);
  }

  isEmpty() {
    return this.products.length === 0 
  }
}
