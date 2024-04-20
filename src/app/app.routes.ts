import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

import {ProductPageComponent} from "./product-page/product-page.component";


export const routes: Routes = [
  {path: "product/:id", component: ProductPageComponent},
  {path: "**", component: HomepageComponent},
];

