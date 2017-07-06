import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NationalTeamsComponent } from './components/national-teams/national-teams.component';
import { NationalTeamComponent } from './components/national-team/national-team.component';
import { PlayersComponent } from './components/players/players.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';

const APP_ROUTES: Routes = [
  { path: 'nationalTeams', component: NationalTeamsComponent},
  { path: 'nationalTeam/:id', component: NationalTeamComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'updatePlayer/:id', component: UpdatePlayerComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
