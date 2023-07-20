import { TestBed } from '@angular/core/testing';

import { AddSkillsService } from './add-skills.service';

describe('AddSkillsService', () => {
  let service: AddSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
