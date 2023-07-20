import { TestBed } from '@angular/core/testing';

import { EditExperienceService } from './edit-experience.service';

describe('EditExperienceService', () => {
  let service: EditExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
