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

  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService) {
  }

  ngOnInit(): void {
    this.userId = this.cookieService.get('user');
    if (this.userId === '') {
      this.router.navigateByUrl('login');
    }
    else{
    }
  }

  async fetchUserData(): Promise<number> {
    this.data = await this.xi.fetchUserInfo(this.userId);
    console.log(this.data);
    return this.data.xp;
  }

}
