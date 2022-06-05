import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoClientComponent } from './photo-client.component';

describe('PhotoClientComponent', () => {
  let component: PhotoClientComponent;
  let fixture: ComponentFixture<PhotoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
