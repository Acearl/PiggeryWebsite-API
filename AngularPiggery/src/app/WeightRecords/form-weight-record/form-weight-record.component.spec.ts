import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWeightRecordComponent } from './form-weight-record.component';

describe('FormWeightRecordComponent', () => {
  let component: FormWeightRecordComponent;
  let fixture: ComponentFixture<FormWeightRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWeightRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWeightRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
