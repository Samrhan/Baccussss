import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {EncryptService} from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class XiapiService {
  private data: string;

  constructor(private encrypt: EncryptService) {
  }

  async fetchUserInfo(userId): Promise<string> {
    this.data = '';
    await fetch(`http://baccussss.fr:8080/infos/${userId.toString()}/${this.encrypt.getApiTokenInfos(userId)}`)
      .then(res => res.json())
      .then(json => {
        this.data = JSON.stringify(json);
      });
    return this.data;
  }

  async fetchUserTag(userId): Promise<any> {
    fetch(`http://baccussss.fr:8080/tag/${userId.toString()}/${this.encrypt.getApiTokenTag(userId)}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      });
  }

  async registerUser(userId, tag, pdp, mail): Promise<boolean> {
    return fetch(`http://baccussss.fr:8080/register/${userId}/${tag}/${pdp}/${mail}/${this.encrypt.getApiTokenRegister(userId)}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }

  async addPdp(userId, pdp): Promise<boolean> {
    return fetch(`http://baccussss.fr:8080/addpdp/${userId}/${pdp}/${this.encrypt.getApiTokenRegister(userId)}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }

  async addMail(userId, mail): Promise<boolean> {
    return fetch(`http://baccussss.fr:8080/addmail/${userId}/${mail}/${this.encrypt.getApiTokenRegister(userId)}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }
  async addTwitch(userId, id, tag): Promise<boolean> {
    return fetch(`http://baccussss.fr:8080/addtwitch/${userId}/${id}/${tag}/${this.encrypt.getApiTokenTwitch(userId)}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(json => {
        return json.status === 'done';
      });
  }
}
