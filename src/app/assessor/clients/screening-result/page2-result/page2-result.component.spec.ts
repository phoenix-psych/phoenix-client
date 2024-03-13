import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ResultComponent } from './page2-result.component';

describe('Page2ResultComponent', () => {
  let component: Page2ResultComponent;
  let fixture: ComponentFixture<Page2ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2ResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
