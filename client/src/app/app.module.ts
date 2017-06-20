import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PlayerApiService } from './player-api.service';
import { GithubApiService } from './github-api.service';
import { BattleComponent } from './battle/battle.component';
import { SelectComponent } from './battle/select/select.component';
import { PlayerComponent } from './battle/select/player/player.component';
import { ResultsComponent } from './battle/results/results.component';
import { RankingsComponent } from './battle/rankings/rankings.component';

import { Player1DataService } from './player1-data.service';
import { Player2DataService } from './player2-data.service';
import { AllPlayersDataService } from './all-players-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    SelectComponent,
    PlayerComponent,
    ResultsComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    PlayerApiService,
    GithubApiService,
    Player1DataService,
    Player2DataService,
    AllPlayersDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
