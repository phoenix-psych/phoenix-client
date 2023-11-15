import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomalComponent } from './tomal.component';

describe('TomalComponent', () => {
  let component: TomalComponent;
  let fixture: ComponentFixture<TomalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
