import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubToStaffComponent } from './assign-sub-to-staff.component';

describe('AssignSubToStaffComponent', () => {
  let component: AssignSubToStaffComponent;
  let fixture: ComponentFixture<AssignSubToStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignSubToStaffComponent]
    });
    fixture = TestBed.createComponent(AssignSubToStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
