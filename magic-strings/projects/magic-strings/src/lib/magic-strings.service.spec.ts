import { TestBed } from '@angular/core/testing';

import { MagicStringsService } from './magic-strings.service';

describe('MagicStringsService', () => {
  let service: MagicStringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicStringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
