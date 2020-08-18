import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {EncryptService} from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class XiapiService {

  constructor(private encrypt: EncryptService) {
  }

  async fetchUserInfo(userId): Promise<any> {
    fetch(`http://baccussss.fr:8080/${userId}/${this.encrypt.getApiToken(userId)}`)
      .then(res => res.json())
      .then(json => {
        return json;
      });
  }
}
