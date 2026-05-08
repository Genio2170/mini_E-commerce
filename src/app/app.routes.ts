import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home';
import { ProductListComponent } from './modules/products/product-list/product-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent }
];
