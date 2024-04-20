import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FlexLayoutModule,
    ProductsComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  title = 'Infinite summer ice cream store';
  subtitle = 'Which one do you want?';

}
