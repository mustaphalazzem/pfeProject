import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionAnnuleComponent } from './excursion-annule.component';

describe('ExcursionAnnuleComponent', () => {
  let component: ExcursionAnnuleComponent;
  let fixture: ComponentFixture<ExcursionAnnuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionAnnuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcursionAnnuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
