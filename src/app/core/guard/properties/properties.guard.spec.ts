import { TestBed } from '@angular/core/testing';

import { PropertiesGuard } from './properties.guard';

describe('PropertiesGuard', () => {
  let guard: PropertiesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PropertiesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
