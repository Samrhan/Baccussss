import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchoauthsuccessComponent } from './twitchoauthsuccess.component';

describe('TwitchoauthsuccessComponent', () => {
  let component: TwitchoauthsuccessComponent;
  let fixture: ComponentFixture<TwitchoauthsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchoauthsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchoauthsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
