import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePenComponent } from './create-pen.component';

describe('CreatepenComponent', () => {
  let component: CreatePenComponent;
  let fixture: ComponentFixture<CreatePenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
