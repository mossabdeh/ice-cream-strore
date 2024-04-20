import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import {Product} from "./core/product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = PRODUCTS.find(product => product.id === id);
    return of(product);
  }
}
