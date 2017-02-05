/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnalisisComponent } from './analisis.component';

describe('AnalisisComponent', () => {
  let component: AnalisisComponent;
  let fixture: ComponentFixture<AnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
