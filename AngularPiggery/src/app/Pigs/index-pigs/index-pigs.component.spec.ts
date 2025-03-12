import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPigsComponent } from './index-pigs.component';

describe('IndexPigsComponent', () => {
  let component: IndexPigsComponent;
  let fixture: ComponentFixture<IndexPigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
