import { TestBed } from '@angular/core/testing';

import { PersonalskillsService } from './personalskills.service';

describe('PersonalskillsService', () => {
  let service: PersonalskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
