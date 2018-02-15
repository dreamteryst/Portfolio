import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiomonialsComponent } from './testiomonials.component';

describe('TestiomonialsComponent', () => {
  let component: TestiomonialsComponent;
  let fixture: ComponentFixture<TestiomonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestiomonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiomonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
