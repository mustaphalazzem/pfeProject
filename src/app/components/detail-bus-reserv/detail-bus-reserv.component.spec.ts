import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBusReservComponent } from './detail-bus-reserv.component';

describe('DetailBusReservComponent', () => {
  let component: DetailBusReservComponent;
  let fixture: ComponentFixture<DetailBusReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBusReservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBusReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
