import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { NationalTeamsService } from './services/national-teams.service';
import { PlayersService } from './services/players.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NationalTeamsComponent } from './components/national-teams/national-teams.component';
import { PlayersComponent } from './components/players/players.component';
import { NationalTeamComponent } from './components/national-team/national-team.component';
import { WithoutPhotoPipe } from './pipes/without-photo.pipe';
//import { AddNationalTeamComponent } from './components/add-national-team/add-national-team.component';
import { FormPlayerComponent } from './components/form-player/form-player.component';
import { FormNationalTeamComponent } from './components/form-national-team/form-national-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NationalTeamsComponent,
    PlayersComponent,
    NationalTeamComponent,
    WithoutPhotoPipe,
  //  AddNationalTeamComponent,
    FormPlayerComponent,
    FormNationalTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    NationalTeamsService,
    PlayersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
