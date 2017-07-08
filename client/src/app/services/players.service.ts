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

  getPlayer(params:any) {
    let query : string;
    query = `getPlayer/` +  params["id"];
    const url = this.apiURL + query;
    return this.httpModule.get( url )
      .map( res => res.json());
  }

  updatePlayer(player_to_update) {
    let params = JSON.stringify(player_to_update); //convertimos a string
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.httpModule.put(this.apiURL + 'updatePlayer/' + player_to_update._id, params, {headers: headers})
      .map(res => res.json());
  }

  registerPlayer(player_to_register){
    let params = JSON.stringify(player_to_register); //convertimos a string
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.httpModule.post(this.apiURL + 'savePlayer/', params, { headers: headers })
      .map(res => res.json());
  }

  deletePlayer(id: number){
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.httpModule.delete(this.apiURL + 'deletePlayer/'+id, { headers: headers })
      .map(res => res.json());
  }
}
