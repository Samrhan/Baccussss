import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {XiapiService} from './xiapi.service';
import {EncryptService} from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService, private encrypt: EncryptService) {
  }

  async checkDB(tokenType, token): Promise<void> {
    fetch('https://discordapp.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${token}`
      }
    })
      .then(res => res.json())
      .then(async response => {
        const userId = this.encrypt.convertId(response.id);
        this.cookieService.set('id', userId);
        const sdata = await this.xi.fetchUserInfo(userId);
        const datas = JSON.parse(sdata);
        if (datas.tag === null) {
          if (!(await this.xi.registerUser(userId, response.username, response.avatar, response.email))) {
            await this.router.navigateByUrl('');
          }
        }
        if (datas.mail === undefined) {
          await this.xi.addMail(userId, response.email);
        }
        await this.xi.addPdp(userId, response.avatar);
        await this.router.navigateByUrl('/portal/dashboard');
      })
      .catch(console.error);
  }

  disconnect(): void {
    this.cookieService.deleteAll('/');
    this.router.navigateByUrl('');
  }
}
