import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPenComponent } from './form-pen.component';

describe('FormPenComponent', () => {
  let component: FormPenComponent;
  let fixture: ComponentFixture<FormPenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
