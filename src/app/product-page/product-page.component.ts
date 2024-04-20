import {Component, OnInit} from '@angular/core';
import {Product} from "../core/product";
import { ActivatedRoute } from '@angular/router';
import { Flavor } from '../core/flavor';
import { Size } from '../core/size';
import { ProductService } from '../product.service';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
  MatCardModule,
  MatCardTitle
} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatChip, MatChipSet, MatChipsModule} from "@angular/material/chips";
import {MatButton} from "@angular/material/button";
import {SelectedProductAttributes} from "../core/selectedProductAttributes";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardTitle,
    FlexLayoutModule,
    MatCardImage,
    MatCardContent,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    NgForOf,
    MatChipsModule,
    MatChipSet,
    MatCardActions,
    MatButton
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  imageUrl: string = '';
  selectedAttributes: SelectedProductAttributes = {
    flavor: undefined,
    size: undefined,
  };
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product)); // TODO refactor to getter
  }

  get flavorOptions(): string {
    return (
      this.product?.flavors?.map((flavor) => flavor.name).join('|') ?? 'yolii'
    );
  }

  get sizeOptions(): string {
    return this.product?.sizes?.join('|') ?? 'yolii'; //TODO change default to ""
  }

  setImageUrl(flavor: Flavor): void {
    const flavorImageUrl = this.product?.imageUrls.find((url) =>
      url.includes(flavor.name)
    );
    if (!flavorImageUrl) {
      throw Error(`No flavor for ${flavor.name} value`); // TODO refactor for setter
    }
    this.imageUrl = flavorImageUrl;
  }

  ngOnInit() {
    this.getProduct();
    this.setSelectedAttributes(
      this.product?.flavors[0],
      this.product?.sizes[0]
    );
    if (this.selectedAttributes?.flavor) {
      this.setImageUrl(this.selectedAttributes.flavor);
    }
  }

  public updateSelectedProductAttributes(flavor: Flavor | undefined, size: Size | undefined) {
    this.setSelectedAttributes(flavor ?? {name: "none", color: "#DDD"}, size ?? Size.SMALL);
    if (this.selectedAttributes.flavor) {
      this.setImageUrl(this.selectedAttributes.flavor);
    }
  }

  private setSelectedAttributes(
    flavor: Flavor | undefined,
    size: Size | undefined
  ) {
    this.selectedAttributes = {
      flavor: flavor,
      size: size,
    };
  }
}
