import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../classes/player.class';
import { NationalTeamsService } from '../../services/national-teams.service';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.css']
})

export class FormPlayerComponent implements OnInit {
  public titulo: string;
  public player: Player = new Player;
  public alertMessage;
  public action: String;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private playersService: PlayersService,
              private nationalTeamsService: NationalTeamsService) { }

  ngOnInit() {
    this.action = this.playersService.getAction();
    if(this.action == "update"){
      this.titulo = 'Actualizar datos';
      this.getPlayer();
    }else{
      this.titulo = 'Registrar Jugador';
    }
    this.nationalTeamsService.getNationalTeams().subscribe();
    console.log('Update-player cargado');
  }

  getPlayer() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.playersService.getPlayer(params))
      .subscribe(response => {
        this.player._id = response.player._id;
        this.player.name = response.player.name;
        this.player.position = response.player.position;
        this.player.club = response.player.club;
        this.player.league = response.player.league;
        this.player.dateOfBirth = response.player.dateOfBirth;
        this.player.nationalTeam = response.player.nationalTeam;
      });
  }

  onSubmit() {
    if(this.action == "update") { //Update jugador
      this.playersService.updatePlayer(this.player).subscribe(
        response => {
          if (!response.player) {
            this.alertMessage = 'El jugador no se ha actualizado';
          } else {
            this.player = response.player; // actualizamos jugador
            this.alertMessage = 'Datos actualizados correctamente';
          }

          this.router.navigate(['/players']);
        },
        error => {
          var errorMessage = <any>error;
          if (errorMessage != null) {
            var body = JSON.parse(error._body);
            this.alertMessage = body.message;
            console.log(error);
          }
        });
    }else{ //Register Jugador
      this.playersService.registerPlayer(this.player).subscribe(
        response => {
          if (!response.player) {
            this.alertMessage = 'El jugador no se ha podido registrar';
          } else {
            this.alertMessage = 'Jugador registrado correctamente';
          }

          this.router.navigate(['/players']);
        },
        error => {
          var errorMessage = <any>error;
          if (errorMessage != null) {
            var body = JSON.parse(error._body);
            this.alertMessage = body.message;
            console.log(error);
          }
        });
    }
  }

  cancel(){
    this.router.navigate(['/players']);
  }
}
