import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssignSubToStaffComponent } from './update-assign-sub-to-staff.component';

describe('UpdateAssignSubToStaffComponent', () => {
  let component: UpdateAssignSubToStaffComponent;
  let fixture: ComponentFixture<UpdateAssignSubToStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAssignSubToStaffComponent]
    });
    fixture = TestBed.createComponent(UpdateAssignSubToStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
