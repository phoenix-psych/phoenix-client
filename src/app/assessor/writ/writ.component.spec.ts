import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritComponent } from './writ.component';

describe('WritComponent', () => {
  let component: WritComponent;
  let fixture: ComponentFixture<WritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
