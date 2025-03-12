import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductInSaleComponent } from './create-product-in-sale.component';

describe('CreateProductInSaleComponent', () => {
  let component: CreateProductInSaleComponent;
  let fixture: ComponentFixture<CreateProductInSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductInSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductInSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
