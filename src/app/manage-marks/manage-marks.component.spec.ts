import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMarksComponent } from './manage-marks.component';

describe('ManageMarksComponent', () => {
  let component: ManageMarksComponent;
  let fixture: ComponentFixture<ManageMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMarksComponent]
    });
    fixture = TestBed.createComponent(ManageMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
