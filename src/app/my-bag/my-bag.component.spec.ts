/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyBagComponent } from './my-bag.component';

describe('MyBagComponent', () => {
  let component: MyBagComponent;
  let fixture: ComponentFixture<MyBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
