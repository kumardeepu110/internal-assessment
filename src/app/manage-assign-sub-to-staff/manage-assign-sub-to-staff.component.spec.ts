import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssignSubToStaffComponent } from './manage-assign-sub-to-staff.component';

describe('ManageAssignSubToStaffComponent', () => {
  let component: ManageAssignSubToStaffComponent;
  let fixture: ComponentFixture<ManageAssignSubToStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAssignSubToStaffComponent]
    });
    fixture = TestBed.createComponent(ManageAssignSubToStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
