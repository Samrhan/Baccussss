import { TestBed } from '@angular/core/testing';

import { XiapiService } from './xiapi.service';

describe('XiapiService', () => {
  let service: XiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
