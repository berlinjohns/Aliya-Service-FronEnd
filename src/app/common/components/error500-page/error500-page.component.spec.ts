import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error500PageComponent } from './error500-page.component';

describe('Error500PageComponent', () => {
  let component: Error500PageComponent;
  let fixture: ComponentFixture<Error500PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Error500PageComponent]
    });
    fixture = TestBed.createComponent(Error500PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
