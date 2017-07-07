import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../classes/player.class';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})

export class UpdatePlayerComponent implements OnInit {
  public titulo: string;
  public player: Player = new Player;
  public alertMessage;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private playersService: PlayersService) {
  }


  ngOnInit() {
    this.titulo = 'Actualizar datos';
    console.log('Update-player cargado');
    this.getPlayer();
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
        this.player.dateOfBirth = response.player["date of birth"];
        this.player.nationalTeam = response.player.nationalTeam;
      });
  }

  onSubmit() {
    console.log(this.player);

    this.playersService.updatePlayer(this.player).subscribe(
      response => {
        if (!response.player) {
          this.alertMessage = 'El jugador no se ha actualizado';
        } else {
          this.player = response.player; //actualizamos jugador
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
  }
}
