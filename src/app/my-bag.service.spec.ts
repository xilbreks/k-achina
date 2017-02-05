/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyBagService } from './my-bag.service';

describe('MyBagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyBagService]
    });
  });

  it('should ...', inject([MyBagService], (service: MyBagService) => {
    expect(service).toBeTruthy();
  }));
});
