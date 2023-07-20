import { TestBed } from '@angular/core/testing';

import { AddLanguageService } from './add-language.service';

describe('AddLanguageService', () => {
  let service: AddLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
