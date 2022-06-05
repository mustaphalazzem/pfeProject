import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerailsAnnuleComponent } from './derails-annule.component';

describe('DerailsAnnuleComponent', () => {
  let component: DerailsAnnuleComponent;
  let fixture: ComponentFixture<DerailsAnnuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerailsAnnuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerailsAnnuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
