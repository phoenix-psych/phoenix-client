import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3ResultComponent } from './page3-result.component';

describe('Page3ResultComponent', () => {
  let component: Page3ResultComponent;
  let fixture: ComponentFixture<Page3ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page3ResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
