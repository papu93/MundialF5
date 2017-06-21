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
    this.activatedRoute.params
      .switchMap((params: Params) => this.nationalTeamsService.getNationalTeam(+params['id']))
      .subscribe(nationalTeam => {
        this.nationalTeam._id = nationalTeam._id;
        this.nationalTeam.name = nationalTeam.name;
        this.nationalTeam.confederation = nationalTeam.confederation;
      });

    this.activatedRoute.params
      .switchMap((params: Params) => this.playersService.getPlayers(this.nationalTeam._id))
      .subscribe(players => {
        console.log(players);
      });
  }
  storePlayers(res: any[]) {
    for (let player of res) {
      this.p.name = player.name;
      this.p.position = player.position;
      this.p.club = player.club;
      this.p.league = player.league;
      this.p.dateOfBirth = player.dateOfBirth;
      this.p.nationalTeam = player.nationalTeam;
      this.players.push(this.p);
    }
  }
}
