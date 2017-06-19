import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { NationalTeamsService } from '../../services/national-teams.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-national-team',
  templateUrl: './national-team.component.html',
  styleUrls: ['./national-team.component.css']
})
export class NationalTeamComponent implements OnInit {

  nationalTeam: {
    '_id': number,
    'name': string,
    'confederation': string
  };

  constructor (private activatedRoute: ActivatedRoute,
              private router: Router,
              private nationalTeamsService: NationalTeamsService) {
    this.nationalTeam._id = 0;
    this.nationalTeam.name = 'default';
    this.nationalTeam.confederation = 'default';
  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.nationalTeamsService.getNationalTeam(+params['id']))
      .subscribe(nationalTeam => this.nationalTeam = nationalTeam);
  }
}
