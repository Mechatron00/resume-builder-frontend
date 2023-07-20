import { TestBed } from '@angular/core/testing';

import { AddAwardsService } from './add-awards.service';

describe('AddAwardsService', () => {
  let service: AddAwardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAwardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
