import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchoauthComponent } from './twitchoauth.component';

describe('TwitchoauthComponent', () => {
  let component: TwitchoauthComponent;
  let fixture: ComponentFixture<TwitchoauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchoauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchoauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
