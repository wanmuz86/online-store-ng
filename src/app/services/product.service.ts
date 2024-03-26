import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';

interface ProductDTO {
  id:number,
  title:string,
  image:string,
  price:number
}

// Inject HttpClient inside service - Import inject implement
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  

  private url = "https://fakestoreapi.com/products";
  constructor(private httpClient:HttpClient) { }

  // The class in the website
  getProducts():Observable<Product[]>{
    // Call the API and get a response of type Array of product / DTO
    return this.httpClient.get<ProductDTO[]>(this.url).pipe(
      // Transform it into observable
      map(
        // for each of the response
        // I will transform the response into product object (map)
        response => response.map(val =>{
          return this.convertDTOtoProduct(val);
        })
      )
    )
  }

  getProductById(id:number):Observable<Product>{
    // I call the API, In the API I will get an object / DTO = response
    return this.httpClient.get<ProductDTO>(`${this.url}/${id}`).pipe(
      // The response that I get, I will convert it right to Product[interface]
      map(response => this.convertDTOtoProduct(response))
    );
  }

  updateProduct(id:number,price:number):Observable<void> {
    // Based on documentation, to edit one field use patch
    // To edit all fields, use put
    // For PUT, PATCH and POST =The data is sent as second parameter
    return this.httpClient.patch<void>(`${this.url}/${id}`,{
      // If the key and value is the same it can be shortemed
      price
    })
  }


  convertDTOtoProduct(dto: ProductDTO) : Product {
    console.log(dto);
    return {
      id:dto.id,
      title:dto.title,
      image:dto.image,
      price:dto.price
    }
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
