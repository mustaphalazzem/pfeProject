import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorissComponent } from './favoriss.component';

describe('FavorissComponent', () => {
  let component: FavorissComponent;
  let fixture: ComponentFixture<FavorissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
