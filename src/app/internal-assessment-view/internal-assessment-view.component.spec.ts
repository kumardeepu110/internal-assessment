import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAssessmentViewComponent } from './internal-assessment-view.component';

describe('InternalAssessmentViewComponent', () => {
  let component: InternalAssessmentViewComponent;
  let fixture: ComponentFixture<InternalAssessmentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalAssessmentViewComponent]
    });
    fixture = TestBed.createComponent(InternalAssessmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
