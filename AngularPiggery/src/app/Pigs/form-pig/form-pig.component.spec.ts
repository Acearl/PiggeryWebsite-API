import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPigComponent } from './form-pig.component';

describe('FormPigComponent', () => {
  let component: FormPigComponent;
  let fixture: ComponentFixture<FormPigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
