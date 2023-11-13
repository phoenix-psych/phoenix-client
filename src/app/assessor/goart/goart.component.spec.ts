import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoartComponent } from './goart.component';

describe('GoartComponent', () => {
  let component: GoartComponent;
  let fixture: ComponentFixture<GoartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
