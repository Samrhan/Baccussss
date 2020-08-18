import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {SHA256} from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor(private cookieService: CookieService) {
  }

  genState(): string {
    const stateuuid = SHA256(Date.now().toString() + '5485714221fjhqshbFHdSDF4756').toString();
    this.cookieService.set('uuid', stateuuid);
    return stateuuid;
  }

  isSameState(uuid): boolean {
    return uuid === this.cookieService.get('uuid');
  }

  getApiToken(id): string {
    return SHA256(`${new Date().getMinutes().toString()}${id}`).toString();
  }
}
