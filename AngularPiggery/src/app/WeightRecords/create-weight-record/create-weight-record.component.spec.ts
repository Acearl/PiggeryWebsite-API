import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeightRecordComponent } from './create-weight-record.component';

describe('CreateWeightRecordComponent', () => {
  let component: CreateWeightRecordComponent;
  let fixture: ComponentFixture<CreateWeightRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWeightRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWeightRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
