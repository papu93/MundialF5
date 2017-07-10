import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { NationalTeamsService } from '../../services/national-teams.service';
import { PlayersService } from '../../services/players.service';
import { NationalTeam } from '../../classes/national-team.class';
import {Player} from '../../classes/player.class';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-national-team',
  templateUrl: './national-team.component.html',
  styleUrls: ['./national-team.component.css']
})
export class NationalTeamComponent implements OnInit {

  nationalTeam = new NationalTeam();
  players: Player[] = [];
  p: Player = new Player();

  constructor (private activatedRoute: ActivatedRoute,
               private router: Router,
               private nationalTeamsService: NationalTeamsService,
               private playersService: PlayersService) {
  }

  ngOnInit() {
    this.getNationalTeamInfo();
    this.getPlayers();
  }

  getNationalTeamInfo() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.nationalTeamsService.getNationalTeam(+params['id']))
      .subscribe(response => {
        this.nationalTeam._id = response.nationalTeam._id;
        this.nationalTeam.name = response.nationalTeam.name;
        this.nationalTeam.confederation = response.nationalTeam.confederation;
        this.nationalTeam.image = response.nationalTeam.image;
      });
  }

  getPlayers() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.playersService.getPlayers(+params['id']))
      .subscribe(
        response => {
          if (!response.players) {
            console.log('No hay jugadores para cargar');
          } else {
            this.players = response.players;
            console.log(this.players);
          }
        },
        error => {
          const errorMessage = <any>error;
          if (errorMessage != null) {
            console.log(JSON.parse(error._body));
          }
        });
  }
}
