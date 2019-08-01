import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCustomerPage } from './login-customer.page';

describe('LoginCustomerPage', () => {
  let component: LoginCustomerPage;
  let fixture: ComponentFixture<LoginCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
