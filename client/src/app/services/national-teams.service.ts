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
    const query = `getNationalTeams/`;
    const url = this.apiURL + query;
    console.log(url);
    return this.httpModule.get( url )
      .map( res => this.nationalTeams = res.json());
  }

  getNationalTeam(nationalTeamId: number) {
    let query = `getNationalTeam/` + nationalTeamId;
    const url = this.apiURL + query;
    return this.httpModule.get( url )
      .map( res => res.json());
  }

  updateNationalTeam(NationalTeam_to_update) {
    let params = JSON.stringify(NationalTeam_to_update); //convertimos a string
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.httpModule.put(this.apiURL + 'updateNationalTeam/' + NationalTeam_to_update._id, params, {headers: headers})
      .map(res => res.json());
  }

  registerNationalTeam(nationalTeam_to_register){
    let params = JSON.stringify(nationalTeam_to_register); //convertimos a string
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.httpModule.post(this.apiURL + 'saveNationalTeam/', params, { headers: headers })
      .map(res => res.json());
  }

  deleteNationalTeam(id: number){
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.httpModule.delete(this.apiURL + 'deleteNationalTeam/'+id, { headers: headers })
      .map(res => res.json());
  }

  getAction(){
    return this.action;
  }

  setAction(action: string){
    this.action = action;
  }
}
