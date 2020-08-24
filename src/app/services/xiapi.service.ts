import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {EncryptService} from './encrypt.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class XiapiService {
  private data: string;

  constructor(private encrypt: EncryptService, private cookieService: CookieService) {
  }

  async fetchUserInfo(userId): Promise<string> {
    this.data = '';
    await fetch(`http://baccussss.fr:8080/infos/${userId}`, {
      headers: {
        token: this.encrypt.getApiTokenInfos(userId),
      }
    })
      .then(res => res.json())
      .then(json => {
        this.data = JSON.stringify(json);
      });
    return this.data;
  }

  async fetchUserConnexions(userId): Promise<string> {
    this.data = '';
    await fetch(`http://baccussss.fr:8080/connexions/${userId.toString()}`, {
      headers: {
        token: this.encrypt.getApiTokenConnexions(userId),
      }
    })
      .then(res => res.json())
      .then(json => {
        this.data = JSON.stringify(json);
      });
    return this.data;
  }

  async registerUser(userId, tag, pdp, mail): Promise<boolean> {
    return fetch(`http://baccussss.fr:8080/register/${userId}/${tag}/${pdp}/${mail}`, {
      method: 'POST',
      headers: {
        token: this.encrypt.getApiTokenRegister(userId)
      }
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }

  async addPdp(userId, pdp): Promise<boolean> {
    return fetch(`http://baccussss.fr:8080/addpdp/${userId}/${pdp}`, {
      method: 'PUT',
      headers: {
        token: this.encrypt.getApiTokenRegister(userId)
      }
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }

  async addMail(userId, mail): Promise<boolean> {
    return fetch(`http://baccussss.fr:8080/addmail/${userId}/${mail}`, {
      method: 'PUT',
      headers: {
        token: this.encrypt.getApiTokenRegister(userId)
      }
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }

  async addTwitch(code): Promise<boolean> {
    const userId = this.cookieService.get('id');
    return fetch(`http://baccussss.fr:8080/addtwitch/${userId}/${code}`, {
      method: 'PUT',
      headers: {
        token: this.encrypt.getApiTokenTwitch(userId)
      }
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }
}
