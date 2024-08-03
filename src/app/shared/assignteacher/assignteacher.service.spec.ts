import { TestBed } from '@angular/core/testing';

import { AssignteacherService } from './assignteacher.service';

describe('AssignteacherService', () => {
  let service: AssignteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
