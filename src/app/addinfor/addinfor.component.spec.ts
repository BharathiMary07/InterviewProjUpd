import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinforComponent } from './addinfor.component';

describe('AddinforComponent', () => {
  let component: AddinforComponent;
  let fixture: ComponentFixture<AddinforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
