import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiptolocationComponent } from './shiptolocation.component';

describe('ShiptolocationComponent', () => {
  let component: ShiptolocationComponent;
  let fixture: ComponentFixture<ShiptolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiptolocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiptolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
