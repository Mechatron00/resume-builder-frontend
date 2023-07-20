import { TestBed } from '@angular/core/testing';

import { EditObjectivesService } from './edit-objectives.service';

describe('EditObjectivesService', () => {
  let service: EditObjectivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditObjectivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
