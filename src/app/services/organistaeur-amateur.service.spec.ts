import { TestBed } from '@angular/core/testing';

import { OrganisateuramateurService } from './organistaeur-amateur.service';

describe('OrganistaeurAmateurService', () => {
  let service: OrganisateuramateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganisateuramateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
