import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  constructor() {
  }
  // Ne marche pas : J'ai enlevé le token
  options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
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
