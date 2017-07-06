import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NationalTeamsService } from './services/national-teams.service';
import { PlayersService } from './services/players.service';

// Routes
import { APP_ROUTING } from './app.routes';

// Services

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NationalTeamsComponent } from './components/national-teams/national-teams.component';
import { PlayersComponent } from './components/players/players.component';
import { NationalTeamComponent } from './components/national-team/national-team.component';
import { WithoutPhotoPipe } from './pipes/without-photo.pipe';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NationalTeamsComponent,
    PlayersComponent,
    NationalTeamComponent,
    UpdatePlayerComponent,
    WithoutPhotoPipe
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
