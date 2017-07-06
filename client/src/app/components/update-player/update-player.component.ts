import { Component, OnInit } from '@angular/core';
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
  public player: Player = new Player();
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
      .switchMap((params: Params) => this.playersService.getPlayers(+params['id']))
      .subscribe(response => {
        this.player.name = response.name;
        this.player.position = response.position;
        this.player.club = response.club;
        this.player.league = response.league;
        this.player.dateOfBirth = response.dateOfBirth;
        this.player.nationalTeam = response.nationalTeam;
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
      },
      error => {
        var errorMessage = <any>error;
        console.log("body: " + error._body);

        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          this.alertMessage = body.message;
          console.log(error);
        }
      });
  }
}
