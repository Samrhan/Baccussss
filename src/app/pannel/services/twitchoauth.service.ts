import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {XiapiService} from '../../services/xiapi.service';

@Injectable({
  providedIn: 'root'
})
export class TwitchoauthService {

  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService) {
  }

  async checkDB(token): Promise<void> {
    await fetch('https://api.twitch.tv/helix/users', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Client-Id': 'lqt8g7bxdbpw5v1dmrvf81hxgj3kqx'
      }
    })
      .then(res => res.json())
      .then(async response => {
        console.log(response);
        const userId = this.cookieService.get('id');
        const id = response.data[0].id;
        const tag = response.data[0].display_name;
        const sdata = await this.xi.fetchUserInfo(userId);
        const datas = JSON.parse(sdata);
        if (datas.twitch === undefined) {
          console.log(datas.twitch);
          await this.xi.addTwitch(userId, id, tag);
        }
        await this.router.navigateByUrl('pannel');
      })
      .catch(console.error);
  }
}
