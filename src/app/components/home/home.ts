import { Component, HostBinding, inject, Input, signal } from '@angular/core';
import { productService } from '../../Services/productService';
import { Cookie } from '../../models/Cookie.interface';
import { Product } from '../../product/product';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private productService = inject(productService);
  bunchOfCookies = this.productService.products;

  constructor() {
    this.productService.fetchCookies().subscribe();
  }

  displayProductInConsole(cookie: Cookie) {
    // ADD TO CART : 4
    console.log('Added to cart :', cookie);
  }
}
