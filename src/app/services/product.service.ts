import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';

// Inject HttpClient inside service - Import inject implement
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "https://fakestoreapi.com/products";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    // Call the API and get a response of type Array of product
    return this.httpClient.get<Product[]>(this.url).pipe(
      // Transform it into observable
      map(
        // for each of the response
        // I will transform the response into product object (map)
        response => response.map(val =>{
          return {
            id:val.id,
            title:val.title,
            price:val.price,
            image:val.image
          }
        })
      )
    )

  }
  
  // getProducts(): Product[] {
  //   return [
  //     {
  //       id:1,
  //       title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //       price:109.95,
  //       image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  //     },
  //     {
  //       id: 2,
  //       title: "Mens Casual Premium Slim Fit T-Shirts ",
  //       price: 22.3,
  //       image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     },
  //     {
  //       id: 3,
  //       title: "Mens Cotton Jacket",
  //       price: 55.99,
  //       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     }
  //   ]
  // }
}
