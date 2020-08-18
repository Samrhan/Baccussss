import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {EncryptService} from '../services/encrypt.service';
import {DiscordService} from '../services/discord.service';


@Component({templateUrl: 'logedin.component.html'})
export class LogedinComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router, private encrypt: EncryptService,
              private discord: DiscordService) {
  }

  ngOnInit(): void {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const token = fragment.get('access_token');
    const tokenType = fragment.get('token_type');
    const uuid = fragment.get('state');
    if (this.encrypt.isSameState(uuid)) {
      this.cookieService.delete('uuid');
      this.discord.storeInCookie(tokenType, token);
    } else {
      this.router.navigateByUrl('');
    }
  }

}


