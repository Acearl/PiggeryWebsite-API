import { TestBed } from '@angular/core/testing';

import { expenseService } from './expense-service.service';

describe('ExpenseServiceService', () => {
  let service: expenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(expenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
