import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
      query = `getPlayers/`;
    } else {
      query = `getPlayers/` + nationalTeamId;
    }
    const url = this.apiURL + query;
    return this.httpModule.get( url )
      .map( res => this.players = res.json());
  }

  getPlayer(maiame:any) {
    console.log(maiame);
    let query : string;
    query = `getPlayer/` +  maiame["id"];
    const url = this.apiURL + query;
    console.log(url);
    return this.httpModule.get( url )
      .map( res => res.json());
  }

  updatePlayer(player_to_update) {
    let params = JSON.stringify(player_to_update); //convertimos a string
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.httpModule.put(this.apiURL + 'updatePlayer/' + player_to_update._id, params, {headers: headers})
      .map(res => res.json());
  }
}
