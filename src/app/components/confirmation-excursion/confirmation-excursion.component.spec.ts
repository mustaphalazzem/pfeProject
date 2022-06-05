import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationExcursionComponent } from './confirmation-excursion.component';

describe('ConfirmationExcursionComponent', () => {
  let component: ConfirmationExcursionComponent;
  let fixture: ComponentFixture<ConfirmationExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
