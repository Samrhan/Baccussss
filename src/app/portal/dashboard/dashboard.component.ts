import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {XiapiService} from '../../services/xiapi.service';
import {EncryptService} from '../../services/encrypt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: any;
  data: any;
  json: any;
  tlogged = true;
  xp: number;
  xpmax: number;
  width: string;
  percent: number;

  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService, private encrypt: EncryptService) {
  }

  async ngOnInit(): Promise<void> {

    this.userId = this.cookieService.get('id');
    if (this.userId === '') {
      await this.router.navigateByUrl('login');
    } else {
      this.data = await this.xi.fetchUserInfo(this.userId);
      this.json = JSON.parse(this.data);
      this.tlogged = this.json.twitch !== undefined;
      this.xp = this.json.xp;
      this.xpmax = 100 + 50 * this.json.lvl;
      this.percent = Math.round(this.xp / this.xpmax * 100);
      this.width = `width:${this.percent}%`;
      this.userId = this.encrypt.reconvertId(this.userId);
    }
  }
}
