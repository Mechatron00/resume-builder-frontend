import { TestBed } from '@angular/core/testing';

import { AddhobbiesService } from './addhobbies.service';

describe('AddhobbiesService', () => {
  let service: AddhobbiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhobbiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
