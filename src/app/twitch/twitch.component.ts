import {Component} from '@angular/core';
import {TwitchService} from '../twitch.service';
import {Observable, of} from 'rxjs';


@Component({templateUrl: 'twitch.component.html'})
export class TwitchComponent {
  follow: number;
  constructor(private twitchservice: TwitchService) {
  }


  async getFollow(): Promise<number> {
    this.follow = await this.twitchservice.getFollow();
    console.log(this.follow);
    return this.follow;
  }
}

