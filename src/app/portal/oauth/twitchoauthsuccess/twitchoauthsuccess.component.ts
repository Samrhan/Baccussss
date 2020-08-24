import {Component, OnInit} from '@angular/core';
import {EncryptService} from '../../../services/encrypt.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {XiapiService} from '../../../services/xiapi.service';

@Component({
  selector: 'app-twitchoauthsuccess',
  templateUrl: './twitchoauthsuccess.component.html'
})
export class TwitchoauthsuccessComponent implements OnInit {

  constructor(private cookieService: CookieService, private encrypt: EncryptService, private xi: XiapiService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    if (this.encrypt.isSameState(url.searchParams.get('state'))) {
      this.cookieService.delete('uuid');
      await this.xi.addTwitch(code);
      await this.router.navigateByUrl('/portal/connexions');
    }
  }

}
