import { TestBed } from '@angular/core/testing';

import { CreateresumeService } from './createresume.service';

describe('CreateresumeService', () => {
  let service: CreateresumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateresumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
