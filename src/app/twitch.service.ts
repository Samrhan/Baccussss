import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  constructor() {
  }

  options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'o57osdr0inxvt1mmz3gk8wvb43ahnx'
    }
  };

  async getFollow(): Promise<number> {
    return fetch('https://api.twitch.tv/kraken/channels/453553226', this.options)
      .then(res => res.json())
      .then(json => {
        return json.followers;
      });
  }
}
