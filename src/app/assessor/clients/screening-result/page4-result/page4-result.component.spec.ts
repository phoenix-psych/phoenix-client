import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4ResultComponent } from './page4-result.component';

describe('Page4ResultComponent', () => {
  let component: Page4ResultComponent;
  let fixture: ComponentFixture<Page4ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page4ResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page4ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
