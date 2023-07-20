import { TestBed } from '@angular/core/testing';

import { AddCertificationService } from './add-certification.service';

describe('AddCertificationService', () => {
  let service: AddCertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCertificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
