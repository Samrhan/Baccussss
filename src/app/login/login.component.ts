import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const token = fragment.get('access_token');
    const tokenType = fragment.get('token_type');

    fetch('https://discordapp.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${token}`
      }
    })
      .then(res => res.json())
      .then(response => {
        this.cookieService.set('user', response.id);
      })
      .catch(console.error);
  }
}


