import {Component, OnInit} from '@angular/core';
import {EncryptService} from '../../../services/encrypt.service';

@Component({
  selector: 'app-twitchoauth',
  templateUrl: './twitchoauth.component.html'
})
export class TwitchoauthComponent implements OnInit {

  constructor(private encrypt: EncryptService) {
  }

  ngOnInit(): void {
    const stateuuid = this.encrypt.genState();
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=lqt8g7bxdbpw5v1dmrvf81hxgj3kqx&redirect_uri=http://localhost:4200/portal/twitchoauthsuccess&response_type=code&scope=user_read&state=${stateuuid}`;
  }

}
