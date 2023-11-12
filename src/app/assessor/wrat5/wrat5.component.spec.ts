import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wrat5Component } from './wrat5.component';

describe('Wrat5Component', () => {
  let component: Wrat5Component;
  let fixture: ComponentFixture<Wrat5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wrat5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wrat5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
