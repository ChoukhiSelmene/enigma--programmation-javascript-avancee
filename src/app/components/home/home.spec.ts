import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { ProductResponse, productService } from '../../Services/productService';
import { signal } from '@angular/core';
import { Cookie } from '../../models/Cookie.interface';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  let stubProductService: Partial<productService> = {
    // Partial rends tout optionnel, me permettant de mocker que les méthodes qui m'interesse.
    fetchCookies: vi.fn(),
    products: signal<Cookie[]>([]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        {
          provide: productService,
          useValue: stubProductService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
