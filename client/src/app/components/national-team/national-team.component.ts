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
        this.nationalTeam._id = response._id;
        this.nationalTeam.name = response.name;
        this.nationalTeam.confederation = response.confederation;
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

  storePlayers(res: any[]) {
    for (const player of res) {
      this.p.name = player.name;
      this.p.position = player.position;
      this.p.club = player.club;
      this.p.league = player.league;
      this.p.dateOfBirth = player.dateOfBirth;
      this.p.nationalTeam = player.nationalTeam;
      this.players.push(this.p);
    }
  }

  showPlayerDetail() {

  }
}
