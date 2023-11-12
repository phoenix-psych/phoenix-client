import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tomal2Component } from './tomal2.component';

describe('Tomal2Component', () => {
  let component: Tomal2Component;
  let fixture: ComponentFixture<Tomal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tomal2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tomal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
