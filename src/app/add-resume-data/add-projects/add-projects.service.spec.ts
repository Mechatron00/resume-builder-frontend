import { TestBed } from '@angular/core/testing';

import { AddProjectsService } from './add-projects.service';

describe('AddProjectsService', () => {
  let service: AddProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
