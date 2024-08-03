import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentComponent } from './manage-student.component';

describe('ManageStudentComponent', () => {
  let component: ManageStudentComponent;
  let fixture: ComponentFixture<ManageStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageStudentComponent]
    });
    fixture = TestBed.createComponent(ManageStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
