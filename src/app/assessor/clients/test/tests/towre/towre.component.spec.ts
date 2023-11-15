import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowreComponent } from './towre.component';

describe('TowreComponent', () => {
  let component: TowreComponent;
  let fixture: ComponentFixture<TowreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
