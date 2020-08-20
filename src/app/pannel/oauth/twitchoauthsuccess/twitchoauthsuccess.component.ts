import {Component, OnInit} from '@angular/core';
import {EncryptService} from '../../../services/encrypt.service';
import {TwitchoauthService} from '../../services/twitchoauth.service';

@Component({
  selector: 'app-twitchoauthsuccess',
  templateUrl: './twitchoauthsuccess.component.html'
})
export class TwitchoauthsuccessComponent implements OnInit {

  constructor(private encrypt: EncryptService, private twitch: TwitchoauthService) {
  }

  async ngOnInit(): Promise<void> {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const token = fragment.get('access_token');
    if (this.encrypt.isSameState(fragment.get('state'))) {
      await this.twitch.checkDB(token);
    }
  }

}
