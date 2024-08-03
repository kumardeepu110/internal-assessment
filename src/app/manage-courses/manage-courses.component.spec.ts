import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursesComponent } from './manage-courses.component';

describe('ManageCoursesComponent', () => {
  let component: ManageCoursesComponent;
  let fixture: ComponentFixture<ManageCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCoursesComponent]
    });
    fixture = TestBed.createComponent(ManageCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
