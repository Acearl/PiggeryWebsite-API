import { TestBed } from '@angular/core/testing';

import { weightRecordService } from './weight-record-service.service';

describe('WeightRecordServiceService', () => {
  let service: weightRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(weightRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
