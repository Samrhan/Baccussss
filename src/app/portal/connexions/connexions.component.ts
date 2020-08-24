import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {XiapiService} from '../../services/xiapi.service';

@Component({
  selector: 'app-connexions',
  templateUrl: './connexions.component.html',
  styleUrls: ['./connexions.component.css']
})
export class ConnexionsComponent implements OnInit {
  userId: any;
  data: any;
  json: any;
  tlogged = true;


  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService) {
  }

  async ngOnInit(): Promise<void> {
    this.userId = this.cookieService.get('id');
    if (this.userId === '') {
      await this.router.navigateByUrl('login');
    } else {
      this.data = await this.xi.fetchUserConnexions(this.userId);
      this.json = JSON.parse(this.data);
    }
  }

}
