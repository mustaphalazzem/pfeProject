import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbusComponent } from './ajouterbus.component';

describe('AjouterbusComponent', () => {
  let component: AjouterbusComponent;
  let fixture: ComponentFixture<AjouterbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
