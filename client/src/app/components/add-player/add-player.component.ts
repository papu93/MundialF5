import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../classes/player.class';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  public titulo: string;
  public player: Player = new Player;
  public alertMessage;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private playersService: PlayersService) { }

  ngOnInit() {
    this.titulo = 'Registrar Jugador';
    console.log('Add-player cargado');
  }

  onSubmit() {
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
