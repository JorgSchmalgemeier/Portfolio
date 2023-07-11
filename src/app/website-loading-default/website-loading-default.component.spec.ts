import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLoadingDefaultComponent } from './website-loading-default.component';

describe('WebsiteLoadingDefaultComponent', () => {
  let component: WebsiteLoadingDefaultComponent;
  let fixture: ComponentFixture<WebsiteLoadingDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteLoadingDefaultComponent]
    });
    fixture = TestBed.createComponent(WebsiteLoadingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
