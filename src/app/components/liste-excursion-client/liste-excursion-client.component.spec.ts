import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExcursionClientComponent } from './liste-excursion-client.component';

describe('ListeExcursionClientComponent', () => {
  let component: ListeExcursionClientComponent;
  let fixture: ComponentFixture<ListeExcursionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeExcursionClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeExcursionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
