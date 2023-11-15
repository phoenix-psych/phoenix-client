import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WratComponent } from './wrat.component';

describe('WratComponent', () => {
  let component: WratComponent;
  let fixture: ComponentFixture<WratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
