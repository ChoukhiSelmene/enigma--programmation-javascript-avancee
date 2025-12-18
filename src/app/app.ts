import { Component, HostBinding, inject, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Product],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
