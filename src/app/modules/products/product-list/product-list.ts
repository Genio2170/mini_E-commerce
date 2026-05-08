import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
})
export class ProductListComponent {

  products = [
    { name: 'Produto 1', price: 100 },
    { name: 'Produto 2', price: 200 }
  ];

}
