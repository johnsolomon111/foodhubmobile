import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOwnerPage } from './login-owner.page';

describe('LoginOwnerPage', () => {
  let component: LoginOwnerPage;
  let fixture: ComponentFixture<LoginOwnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOwnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
