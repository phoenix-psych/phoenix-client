import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1ResultComponent } from './page1-result.component';

describe('Page1ResultComponent', () => {
  let component: Page1ResultComponent;
  let fixture: ComponentFixture<Page1ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1ResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
