import { Component, HostBinding, inject, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { mockedCookie, mockedCookies } from './data/MockedCookies';
import { Product } from './product/product';
import { Cookie } from './models/Cookie.interface';
import { productService } from './Services/productService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Product],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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
