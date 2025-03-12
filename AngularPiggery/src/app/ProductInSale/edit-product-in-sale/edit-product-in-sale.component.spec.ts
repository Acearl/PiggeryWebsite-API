import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductInSaleComponent } from './edit-product-in-sale.component';

describe('EditProductInSaleComponent', () => {
  let component: EditProductInSaleComponent;
  let fixture: ComponentFixture<EditProductInSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductInSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductInSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
