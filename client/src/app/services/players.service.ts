import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GLOBAL } from './global';

import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {
  players: any[]= [];
  apiURL: string;

  constructor( private httpModule: Http ) {
    this.apiURL = GLOBAL.url;
  }

  getPlayers(nationalTeamId: number) {
    let query;
    if (nationalTeamId == null) {
      query = `/getPlayers/`;
    } else {
      query = `/getPlayers/` + nationalTeamId;
    }
    const url = this.apiURL + query;
    return this.httpModule.get( url )
      .map( res => this.players = res.json());
  }
}
