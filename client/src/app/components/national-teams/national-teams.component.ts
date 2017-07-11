import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { NationalTeamsService } from '../../services/national-teams.service';
import { NationalTeam} from '../../classes/national-team.class';

@Component({
  selector: 'app-national-teams',
  templateUrl: './national-teams.component.html',
  styleUrls: ['./national-teams.component.css']
})
export class NationalTeamsComponent implements OnInit {

  nationalTeams: NationalTeam[] = [];
  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private nationalTeamsService: NationalTeamsService) {  }

  ngOnInit() {
    this.getNationalTeams();
  }

  getNationalTeams(){
    this.activatedRoute.params
      .switchMap((params: Params) => this.nationalTeamsService.getNationalTeams())
      .subscribe(
        response => {
          if(!response){
            console.log("No hay selecciones para cargar");
          }else{
            this.nationalTeams = response;
          }
        },
        error => {
          var errorMessage = <any>error;
          if(errorMessage != null){
            console.log(JSON.parse(error._body));
          }
        });
  }

  showNationalTeam(id: number) {
    this.router.navigate(['/nationalTeam', id]);
  }

  addNationalTeam() {
    this.nationalTeamsService.setAction("register");
    this.router.navigate(['/saveNationalTeam']);
  }

  updateNationalTeam(id: number) {
    this.nationalTeamsService.setAction("update");
    this.router.navigate(['/updateNationalTeam',id]);
  }

  deleteNationalTeam(id: number) {
    this.activatedRoute.params
      .switchMap((params: Params) => this.nationalTeamsService.deleteNationalTeam(id))
      .subscribe(
        response => {
          if(!response){
            console.log("No se pudo eliminar la seleccon");
          }else{
            console.log("Seleccion eliminada");
          }
          this.getNationalTeams(); //en vez de redireccionar, hay que actualizar la lista de selecciones
        },
        error => {
          var errorMessage = <any>error;
          if(errorMessage != null){
            console.log(JSON.parse(error._body));
          }
        });
  }
}
