import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductInSaleComponent } from './form-product-in-sale.component';

describe('FormProductInSaleComponent', () => {
  let component: FormProductInSaleComponent;
  let fixture: ComponentFixture<FormProductInSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductInSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProductInSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
