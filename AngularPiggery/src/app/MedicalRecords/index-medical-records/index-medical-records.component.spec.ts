import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMedicalRecordsComponent } from './index-medical-records.component';

describe('IndexMedicalRecordsComponent', () => {
  let component: IndexMedicalRecordsComponent;
  let fixture: ComponentFixture<IndexMedicalRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMedicalRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexMedicalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
