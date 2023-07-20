import { TestBed } from '@angular/core/testing';

import { EditAwardService } from './edit-award.service';

describe('EditAwardService', () => {
  let service: EditAwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
