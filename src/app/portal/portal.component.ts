import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {XiapiService} from '../services/xiapi.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  userId: any;
  data: any;
  json: any;
  tlogged = true;

  constructor(private cookieService: CookieService, private router: Router, private xi: XiapiService) {
  }

  ngOnInit(): void {
    if (this.router.url === '/portal') {
      this.router.navigateByUrl('portal/home');
    }
  }
}
