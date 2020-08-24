import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {XiapiService} from '../services/xiapi.service';
import {EncryptService} from '../services/encrypt.service';


@Component({
  selector: 'app-logstate',
  templateUrl: './logstate.component.html',
  styleUrls: ['./logstate.component.css']

})
export class LogstateComponent implements OnInit {
  loged: boolean;
  userId: string;
  avatar: string;
  tag: string;
  data: string;

  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService, private encrypt: EncryptService) {
  }

  async ngOnInit(): Promise<void> {
    this.userId = this.cookieService.get('id');
    if (this.userId !== '') {
      this.data = await this.xi.fetchUserInfo(this.userId);
      const json = JSON.parse(this.data);
      this.tag = json.tag;
      this.avatar = json.pdp;
      this.userId = this.encrypt.reconvertId(this.userId);
    }
    this.loged = this.userId !== '';
  }
}
