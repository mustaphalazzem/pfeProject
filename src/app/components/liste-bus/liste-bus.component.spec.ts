import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBusComponent } from './liste-bus.component';

describe('ListeBusComponent', () => {
  let component: ListeBusComponent;
  let fixture: ComponentFixture<ListeBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
