import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductInSalesComponent } from './index-product-in-sales.component';

describe('IndexProductInSalesComponent', () => {
  let component: IndexProductInSalesComponent;
  let fixture: ComponentFixture<IndexProductInSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexProductInSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexProductInSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
