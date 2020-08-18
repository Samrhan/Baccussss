import {Component, OnInit} from '@angular/core';
import {EncryptService} from '../services/encrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private encrypt: EncryptService) {
  }

  ngOnInit(): void {
    const stateuuid = this.encrypt.genState();
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=548571422167924756&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogedin&response_type=token&scope=identify%20email%20guilds&prompt=none&state=${stateuuid}`;
  }

}
