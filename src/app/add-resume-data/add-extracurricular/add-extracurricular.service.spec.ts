import { TestBed } from '@angular/core/testing';

import { AddExtracurricularService } from './add-extracurricular.service';

describe('AddExtracurricularService', () => {
  let service: AddExtracurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddExtracurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
