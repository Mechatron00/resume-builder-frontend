import { TestBed } from '@angular/core/testing';

import { EditPersonalDetailsService } from './edit-personal-details.service';

describe('EditPersonalDetailsService', () => {
  let service: EditPersonalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPersonalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
