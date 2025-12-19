import { inject, Injectable, signal } from '@angular/core';
import { Cookie } from '../models/Cookie.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export type ProductResponse = {
  data: Cookie[];
};

@Injectable({
  providedIn: 'root',
})
export class productService {
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://10.0.10.38:3000';
  // private baseUrl: string = 'http://localhost:3000';

  private _products = signal<Cookie[]>([]);
  products = this._products.asReadonly();

  fetchCookies() {
    return this.httpClient
      .get<ProductResponse>(`${this.baseUrl}/cookie`)
      .pipe(tap((cookies) => this._products.set(cookies.data)));
  }
}
