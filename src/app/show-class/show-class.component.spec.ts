import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClassComponent } from './show-class.component';

describe('ShowClassComponent', () => {
  let component: ShowClassComponent;
  let fixture: ComponentFixture<ShowClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowClassComponent]
    });
    fixture = TestBed.createComponent(ShowClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
