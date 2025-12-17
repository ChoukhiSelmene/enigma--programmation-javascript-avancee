import { Component, input } from '@angular/core';
import { Cookie } from '../models/Cookie.interface';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-product',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product = input.required<Cookie>();
}
