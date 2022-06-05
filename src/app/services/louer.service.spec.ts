import { TestBed } from '@angular/core/testing';

import { LouerService } from './louer.service';

describe('LouerService', () => {
  let service: LouerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LouerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
