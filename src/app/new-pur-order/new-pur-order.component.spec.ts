import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPurOrderComponent } from './new-pur-order.component';

describe('NewPurOrderComponent', () => {
  let component: NewPurOrderComponent;
  let fixture: ComponentFixture<NewPurOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPurOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPurOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
