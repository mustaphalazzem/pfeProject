import { TestBed } from '@angular/core/testing';

import { ReservationbusService } from './reservationbus.service';

describe('ReservationbusService', () => {
  let service: ReservationbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
