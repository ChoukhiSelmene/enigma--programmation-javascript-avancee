import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './Components/header/header';
import {Footer} from './Components/footer/footer';
import { mockedCookie, mockedCookies } from './data/MockedCookies';
import { Product } from "./product/product";
import { Cookie } from './models/Cookie.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bunchOfProducts = mockedCookies;

  protected readonly title = signal('enigma--programmation-javascript-avancee');
}
