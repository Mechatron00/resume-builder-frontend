import { TestBed } from '@angular/core/testing';

import { AddObjectivesService } from './add-objectives.service';

describe('AddObjectivesService', () => {
  let service: AddObjectivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddObjectivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
