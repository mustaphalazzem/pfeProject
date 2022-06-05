import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBusComponent } from './detail-bus.component';

describe('DetailBusComponent', () => {
  let component: DetailBusComponent;
  let fixture: ComponentFixture<DetailBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
