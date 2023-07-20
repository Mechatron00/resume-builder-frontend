import { TestBed } from '@angular/core/testing';

import { EditCertificationService } from './edit-certification.service';

describe('EditCertificationService', () => {
  let service: EditCertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCertificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
