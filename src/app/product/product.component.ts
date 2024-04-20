import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../core/product';
import {RouterLink} from "@angular/router";
import {MatCard, MatCardImage, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardTitle,
    MatCardImage
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  imageUrl: string = "";

  ngOnInit() {
    this.imageUrl = this.product?.imageUrls[0] ?? '';
  }

}
