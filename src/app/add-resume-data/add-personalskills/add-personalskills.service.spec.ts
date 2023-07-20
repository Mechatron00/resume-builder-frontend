import { TestBed } from '@angular/core/testing';

import { AddPersonalskillsService } from './add-personalskills.service';

describe('AddPersonalskillsService', () => {
  let service: AddPersonalskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPersonalskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
