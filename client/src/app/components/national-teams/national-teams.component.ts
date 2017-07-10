import { Component, OnInit } from '@angular/core';
import { NationalTeamsService } from '../../services/national-teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-national-teams',
  templateUrl: './national-teams.component.html',
  styleUrls: ['./national-teams.component.css']
})
export class NationalTeamsComponent implements OnInit {

  constructor( private nationalTeamsService: NationalTeamsService,
               private router: Router) { }

  ngOnInit() {
    this.nationalTeamsService.getNationalTeams().subscribe();
    // console.log(this.nationalTeamsService.nationalTeams);
  }

  showNationalTeam(id: number) {
    this.router.navigate(['/nationalTeam', id]);
  }

  addNationalTeam() {
    this.nationalTeamsService.setAction("register");
    this.router.navigate(['/saveNationalTeam']);
  }

  updateNationalTeam() {
    this.nationalTeamsService.setAction("update");
    this.router.navigate(['/updateNationalTeam']);
  }
}
