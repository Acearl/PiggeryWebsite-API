import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWeightRecordComponent } from './edit-weight-record.component';

describe('EditWeightRecordComponent', () => {
  let component: EditWeightRecordComponent;
  let fixture: ComponentFixture<EditWeightRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWeightRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWeightRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
