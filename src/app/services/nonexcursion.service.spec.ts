import { TestBed } from '@angular/core/testing';

import { NonexcursionService } from './nonexcursion.service';

describe('NonexcursionService', () => {
  let service: NonexcursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonexcursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
