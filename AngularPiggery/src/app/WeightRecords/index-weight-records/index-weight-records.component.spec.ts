import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWeightRecordsComponent } from './index-weight-records.component';

describe('IndexWeightRecordsComponent', () => {
  let component: IndexWeightRecordsComponent;
  let fixture: ComponentFixture<IndexWeightRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexWeightRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexWeightRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
