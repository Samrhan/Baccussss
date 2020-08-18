import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private cookieService: CookieService, private router: Router) {
  }

   storeInCookie(tokenType, token): void{
    fetch('https://discordapp.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${token}`
      }
    })
      .then(res => res.json())
      .then(response => {
        this.cookieService.set('user', response.id);
        this.cookieService.set('avatar', response.avatar);
        this.cookieService.set('tag', response.username);
        this.router.navigateByUrl('');
      })
      .catch(console.error);
  }
}
