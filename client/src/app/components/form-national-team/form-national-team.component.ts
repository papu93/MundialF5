import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { NationalTeam } from '../../classes/national-team.class';
import { NationalTeamsService } from '../../services/national-teams.service';

@Component({
  selector: 'app-form-national-team',
  templateUrl: './form-national-team.component.html',
  styleUrls: ['./form-national-team.component.css']
})
export class FormNationalTeamComponent implements OnInit {
  public titulo: string;
  public nationalTeam: NationalTeam = new NationalTeam;
  public alertMessage;
  public action: String;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private nationalTeamsService: NationalTeamsService){ }

  ngOnInit() {
    this.action = this.nationalTeamsService.getAction();
    if(this.action == "update"){
      this.titulo = 'Actualizar datos';
      this.getNationalTeam();
    }else{
      this.titulo = 'Registrar Seleccion';
    }
    console.log('Form-National-Team cargado');

  }

  getNationalTeam() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.nationalTeamsService.getNationalTeam(params["id"]))
      .subscribe(response => {
        this.nationalTeam._id = response.nationalTeam._id;
        this.nationalTeam.name = response.nationalTeam.name;
        this.nationalTeam.confederation = response.nationalTeam.confederation;
        this.nationalTeam.image = response.nationalTeam.image;
      });
  }

  onSubmit() {
    if(this.action == "update") { //Update NationalTeam
      this.nationalTeamsService.updateNationalTeam(this.nationalTeam).subscribe(
        response => {
          if (!response.nationalTeam) {
            this.alertMessage = 'La seleccion no se ha actualizado';
          } else {
            this.nationalTeam = response.nationalTeam; // actualizamos NT
            this.alertMessage = 'Datos actualizados correctamente';
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
    }else{ //Registrar National Team
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
  }

  cancel(){
    this.router.navigate(['/nationalTeams']);
  }
}
