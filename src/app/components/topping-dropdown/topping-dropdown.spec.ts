import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingDropdown } from './topping-dropdown';

describe('ToppingDropdown', () => {
  let component: ToppingDropdown;
  let fixture: ComponentFixture<ToppingDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToppingDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
