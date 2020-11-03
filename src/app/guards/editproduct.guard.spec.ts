import { TestBed, async, inject } from '@angular/core/testing';

import { EditproductGuard } from './editproduct.guard';

describe('EditproductGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditproductGuard]
    });
  });

  it('should ...', inject([EditproductGuard], (guard: EditproductGuard) => {
    expect(guard).toBeTruthy();
  }));
});
