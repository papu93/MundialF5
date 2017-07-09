import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { NationalTeam } from '../../classes/national-team.class';
import { NationalTeamsService } from '../../services/national-teams.service';

@Component({
  selector: 'app-add-national-team',
  templateUrl: './add-national-team.component.html',
  styleUrls: ['./add-national-team.component.css']
})
export class AddNationalTeamComponent implements OnInit {
  public titulo: string;
  public nationalTeam: NationalTeam = new NationalTeam;
  public alertMessage;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private nationalTeamsService: NationalTeamsService){ }

  ngOnInit() {
    this.titulo = 'Registrar Seleccion';
    console.log('Add-national-team cargado');
    this.nationalTeamsService.getNationalTeams().subscribe();
  }

  onSubmit() {
    this.nationalTeamsService.registerNationalTeam(this.nationalTeam).subscribe(
      response => {
        if (!response.nationalTeam) {
          this.alertMessage = 'La seleccion no se ha podido registrar';
        } else {
          this.alertMessage = 'Seleccion registrada correctamente';
        }

        this.router.navigate(['/nationalTeams']);
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

  cancel(){
    this.router.navigate(['/nationalTeams']);
  }
}
