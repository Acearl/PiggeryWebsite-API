import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexExpensesComponent } from './index-expenses.component';

describe('IndexExpensesComponent', () => {
  let component: IndexExpensesComponent;
  let fixture: ComponentFixture<IndexExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
