import {Component, OnInit} from '@angular/core';
import { PRODUCTS } from '../mock-products';
import {Product} from "../core/product";
import {ProductService} from "../product.service";
import {ProductComponent} from "../product/product.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductComponent,
    FlexLayoutModule,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

}
