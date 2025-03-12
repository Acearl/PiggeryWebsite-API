import { TestBed } from '@angular/core/testing';

import { penService } from './pen-service.service';

describe('PenServiceService', () => {
  let service: penService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(penService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
