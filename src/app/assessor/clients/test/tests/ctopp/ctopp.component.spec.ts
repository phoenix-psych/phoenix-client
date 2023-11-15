import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtoppComponent } from './ctopp.component';

describe('CtoppComponent', () => {
  let component: CtoppComponent;
  let fixture: ComponentFixture<CtoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtoppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
