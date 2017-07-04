import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {

  players: any[]= [];
  apiURL = 'http://localhost:3977/api';

  constructor( private httpModule: Http ) { }

  getPlayers(nationalTeamId: number) {
    let query;
    if (nationalTeamId == null) {
      query = `/getPlayers/`;
    } else {
      query = `/getPlayers/` + nationalTeamId;
    }
    const url = this.apiURL + query;
    return this.httpModule.get( url )
      .map( res => res.json());
  }
}
