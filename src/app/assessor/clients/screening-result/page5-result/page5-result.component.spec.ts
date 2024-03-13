import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5ResultComponent } from './page5-result.component';

describe('Page5ResultComponent', () => {
  let component: Page5ResultComponent;
  let fixture: ComponentFixture<Page5ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page5ResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page5ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
