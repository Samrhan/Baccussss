import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DiscordService} from '../../services/discord.service';
import {$} from 'protractor';

@Component({
  selector: 'app-sidebarpannel',
  templateUrl: './sidebarpannel.component.html',
  styleUrls: ['./sidebarpannel.component.css']
})
export class SidebarpannelComponent implements OnInit {
  path = '';

  constructor(private router: Router, private discord: DiscordService) {
  }

  ngOnInit(): void {
    this.path = this.router.url.split('/')[2];
    /*$(`#${this.path}`).toggleClass('active');*/
  }

  active(component): void {
    /*$(`#${component}`).toggleClass('active');
    $(`#${this.path}`).toggleClass('active');*/
    this.path = component;
  }

  disconnect(): void {
    this.discord.disconnect();
  }

}
