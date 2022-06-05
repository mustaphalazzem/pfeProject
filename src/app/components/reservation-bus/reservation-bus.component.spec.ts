import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBusComponent } from './reservation-bus.component';

describe('ReservationBusComponent', () => {
  let component: ReservationBusComponent;
  let fixture: ComponentFixture<ReservationBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
