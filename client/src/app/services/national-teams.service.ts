import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GLOBAL } from './global';

import 'rxjs/add/operator/map';

@Injectable()
export class NationalTeamsService {
  nationalTeams: any[]= [];
  apiURL: string;

  constructor( private httpModule: Http ) {
    this.apiURL = GLOBAL.url;
  }

  getNationalTeams() {
    const query = `/getNationalTeams/`;
    const url = this.apiURL + query;
    return this.httpModule.get( url )
      .map( res => this.nationalTeams = res.json().nationalTeams );
  }

  getNationalTeam(id: number) {
    const query = `/getNationalTeam/`;
    const url = this.apiURL + query + id;
    return this.httpModule.get( url )
      .map( res => {
        return res.json().nationalTeam;
      });
  }


}
