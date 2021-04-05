import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaselocationComponent } from './purchaselocation.component';

describe('PurchaselocationComponent', () => {
  let component: PurchaselocationComponent;
  let fixture: ComponentFixture<PurchaselocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaselocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaselocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
