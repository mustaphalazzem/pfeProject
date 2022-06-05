import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterExcursionComponent } from './ajouter-excursion.component';

describe('AjouterExcursionComponent', () => {
  let component: AjouterExcursionComponent;
  let fixture: ComponentFixture<AjouterExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
