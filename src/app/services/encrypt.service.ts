import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {SHA256, AES} from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor(private cookieService: CookieService) {
  }

  minutes(): string {
    return Math.round(new Date().getTime() / 1000 / 60).toString();
  }

  genState(): string {
    const stateuuid = SHA256(`${Date.now().toString()}5485714221fjhqshbFHdSDF4756`).toString();
    this.cookieService.set('uuid', stateuuid);
    return stateuuid;
  }

  isSameState(uuid): boolean {
    return uuid === this.cookieService.get('uuid');
  }

  getApiTokenInfos(id): string {
    id = this.reconvertId(id);
    return SHA256(`${this.minutes()}${id}`).toString();
  }

  getApiTokenConnexions(id): string {
    id = this.reconvertId(id);
    return SHA256(`${this.minutes()}${id}`).toString();
  }

  getApiTokenRegister(id): string {
    id = this.reconvertId(id);
    return SHA256(`${this.minutes()}${id}`).toString();
  }

  getApiTokenTwitch(id): string {
    id = this.reconvertId(id);
    return SHA256(`${this.minutes()}${id}`).toString();
  }

  convertId(userId): string {
    const split = userId.match(/.{1,9}/g);
    split[0] = parseInt(split[0], 10).toString(34);
    split[1] = parseInt(split[1], 10).toString(35);
    return split[0] + 'z' + split[1];
  }

  reconvertId(userId): string {
    const id = userId.split('z');
    return parseInt(id[0], 34).toString() + parseInt(id[1], 35).toString();
  }
}
