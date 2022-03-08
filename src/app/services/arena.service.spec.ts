import { TestBed } from '@angular/core/testing';

import { ArenaService } from './arena.service';

describe('ArenarService', () => {
  let service: ArenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
