import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterExcursionComponent } from './consulter-excursion.component';

describe('ConsulterExcursionComponent', () => {
  let component: ConsulterExcursionComponent;
  let fixture: ComponentFixture<ConsulterExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
