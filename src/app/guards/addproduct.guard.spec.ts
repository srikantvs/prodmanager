import { TestBed, async, inject } from '@angular/core/testing';

import { AddproductGuard } from './addproduct.guard';

describe('AddproductGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddproductGuard]
    });
  });

  it('should ...', inject([AddproductGuard], (guard: AddproductGuard) => {
    expect(guard).toBeTruthy();
  }));
});
