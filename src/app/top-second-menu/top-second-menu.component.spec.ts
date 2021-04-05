import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSecondMenuComponent } from './top-second-menu.component';

describe('TopSecondMenuComponent', () => {
  let component: TopSecondMenuComponent;
  let fixture: ComponentFixture<TopSecondMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSecondMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSecondMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
