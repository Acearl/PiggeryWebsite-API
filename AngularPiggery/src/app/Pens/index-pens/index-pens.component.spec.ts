import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPensComponent } from './index-pens.component';

describe('IndexPensComponent', () => {
  let component: IndexPensComponent;
  let fixture: ComponentFixture<IndexPensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
