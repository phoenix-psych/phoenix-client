import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Towre2Component } from './towre2.component';

describe('Towre2Component', () => {
  let component: Towre2Component;
  let fixture: ComponentFixture<Towre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Towre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Towre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
