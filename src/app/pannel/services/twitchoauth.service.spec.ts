import { TestBed } from '@angular/core/testing';

import { TwitchoauthserviceService } from './twitchoauth.service';

describe('TwitchoauthserviceService', () => {
  let service: TwitchoauthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitchoauthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
