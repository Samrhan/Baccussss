import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-logstate',
  templateUrl: './logstate.component.html',
  styleUrls: ['./logstate.component.css']
})
export class LogstateComponent implements OnInit {

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    const userId = this.cookieService.get('user');
    if (userId !== '') {
      console.log(userId);
    }
  }

}
