import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NationalTeamsService {

  nationalTeams: any[]= [];
  apiURL = 'http://localhost:3977/api';

  constructor( private httpModule: Http ) { }

  getNationalTeams() {
    const query = `/getNationalTeams/`;
    const url = this.apiURL + query;
    return this.httpModule.get( url )
      .map( res => {
        this.nationalTeams = res.json().nationalTeams;
        console.log(this.nationalTeams);
      });
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
