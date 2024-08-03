import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBranchComponent } from './update-branch.component';

describe('UpdateBranchComponent', () => {
  let component: UpdateBranchComponent;
  let fixture: ComponentFixture<UpdateBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBranchComponent]
    });
    fixture = TestBed.createComponent(UpdateBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
