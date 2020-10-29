import { TestBed, async, inject } from '@angular/core/testing';

import { DirtyformGuard } from './dirtyform.guard';

describe('DirtyformGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirtyformGuard]
    });
  });

  it('should ...', inject([DirtyformGuard], (guard: DirtyformGuard) => {
    expect(guard).toBeTruthy();
  }));
});
