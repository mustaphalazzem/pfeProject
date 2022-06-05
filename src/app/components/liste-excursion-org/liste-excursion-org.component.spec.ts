import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExcursionOrgComponent } from './liste-excursion-org.component';

describe('ListeExcursionOrgComponent', () => {
  let component: ListeExcursionOrgComponent;
  let fixture: ComponentFixture<ListeExcursionOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeExcursionOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeExcursionOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
