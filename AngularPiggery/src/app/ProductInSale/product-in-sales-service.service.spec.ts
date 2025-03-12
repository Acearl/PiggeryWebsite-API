import { TestBed } from '@angular/core/testing';

import { ProductInSalesServiceService } from './product-in-sales-service.service';

describe('ProductInSalesServiceService', () => {
  let service: ProductInSalesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductInSalesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
