import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';

import 'rxjs/add/operator/map';

@Injectable()
export class NationalTeamsService {
  nationalTeams: any[]= [];
  apiURL: string;
  action: string;

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
      .map( res => res.json().nationalTeam);
  }

  registerNationalTeam(nationalTeam_to_register){
    nationalTeam_to_register._id = this.nationalTeams.length + 1;
    let params = JSON.stringify(nationalTeam_to_register); //convertimos a string
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.httpModule.post(this.apiURL + 'saveNationalTeam/', params, { headers: headers })
      .map(res => res.json());
  }

  getAction(){
    return this.action;
  }

  setAction(action: string){
    this.action = action;
  }
}
