import { TestBed } from '@angular/core/testing';

import { medicalRecordService } from './medical-record-service.service';

describe('MedicalRecordServiceService', () => {
  let service: medicalRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(medicalRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
