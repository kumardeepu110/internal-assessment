import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarksComponent } from './update-marks.component';

describe('UpdateMarksComponent', () => {
  let component: UpdateMarksComponent;
  let fixture: ComponentFixture<UpdateMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMarksComponent]
    });
    fixture = TestBed.createComponent(UpdateMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
