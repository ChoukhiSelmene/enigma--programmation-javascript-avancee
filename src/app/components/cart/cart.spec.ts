import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cart } from './cart';

describe('Cart', () => {
  let component: Cart;
  let fixture: ComponentFixture<Cart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cart],
    }).compileComponents();

    fixture = TestBed.createComponent(Cart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the header I supplied'),
    () => {
      // When
      component.cartTitle = 'My Test';
      fixture.detectChanges();

      const title: string = fixture.componentInstance.cartTitle;
      // Then
      expect(title).toBe('My Test');
    };
});
