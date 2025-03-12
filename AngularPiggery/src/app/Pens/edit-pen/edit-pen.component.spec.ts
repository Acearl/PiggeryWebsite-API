import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPenComponent } from './edit-pen.component';

describe('EditPenComponent', () => {
  let component: EditPenComponent;
  let fixture: ComponentFixture<EditPenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
