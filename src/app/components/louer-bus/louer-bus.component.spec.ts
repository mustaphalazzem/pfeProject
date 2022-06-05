import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerBusComponent } from './louer-bus.component';

describe('LouerBusComponent', () => {
  let component: LouerBusComponent;
  let fixture: ComponentFixture<LouerBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LouerBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
