import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodhubPage } from './foodhub.page';

describe('FoodhubPage', () => {
  let component: FoodhubPage;
  let fixture: ComponentFixture<FoodhubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodhubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodhubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
