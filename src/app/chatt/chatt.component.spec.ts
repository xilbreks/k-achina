/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChattComponent } from './chatt.component';

describe('ChattComponent', () => {
  let component: ChattComponent;
  let fixture: ComponentFixture<ChattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
