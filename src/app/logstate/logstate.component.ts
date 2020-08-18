import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

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
  constructor(private cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.userId = this.cookieService.get('user');
    this.avatar = this.cookieService.get('avatar');
    this.tag = this.cookieService.get('tag');
    this.loged = this.userId !== '';
  }

  redirect(): void{
    this.router.navigateByUrl('pannel');
  }

}
