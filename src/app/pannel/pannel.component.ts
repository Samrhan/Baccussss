import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {XiapiService} from '../services/xiapi.service';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {
  userId: any;
  data: any;
  json: any;
  tlogged = true;

  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService) {
  }

  ngOnInit(): void {
    if (this.router.url === '/pannel') {
      this.router.navigateByUrl('pannel/dashboard');
    }
    /*this.userId = this.cookieService.get('id');
    if (this.userId === '') {
      this.router.navigateByUrl('login');
    } else {
      this.data = await this.xi.fetchUserInfo(this.userId);
      this.json = JSON.parse(this.data);
      console.log(this.json);
      this.tlogged = this.json.twitch !== undefined;
      console.log(this.tlogged);
    }*/
  }
}
