import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DiscordService} from '../../services/discord.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  path = '';

  constructor(private router: Router, private discord: DiscordService) {
  }

  ngOnInit(): void {
    this.path = this.router.url.split('/')[2];
    $(`#${this.path}`).addClass('active');
  }

  active(component): void {
    $(`#${component}`).addClass('active');
    $(`#${this.path}`).removeClass('active');
    this.path = component;
  }

  disconnect(): void {
    this.discord.disconnect();
  }

}
