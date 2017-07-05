import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PlayersService } from '../../services/players.service';
import {Player} from '../../classes/player.class';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  p: Player = new Player();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private playersService: PlayersService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    this.activatedRoute.params
      .switchMap((params: Params) => this.playersService.getPlayers(null))
      .subscribe(
        response => {
          if(!response.players){
            console.log("No hay jugadores para cargar");
          }else{
            this.players = response.players;
            console.log(this.players);
          }
        },
        error => {
          var errorMessage = <any>error;
          if(errorMessage != null){
            console.log(JSON.parse(error._body));
          }
        });
  }
}
