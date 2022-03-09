import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FiguresComponent } from './components/figures/figures.component';
import { ArenasComponent } from './components/arenas/arenas.component';
import { GameComponent } from './components/game/game.component';
import { GameService } from './services/game.service';
import { PlayerService } from './services/player.service';
import { CharacterService } from './services/character.service';
import { AbilityService } from './services/ability.service';
import { SharedDataServiceService } from './services/shared-data-service.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { GameEndComponent } from './game-end/game-end.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FiguresComponent,
    ArenasComponent,
    GameComponent,
    AdminPanelComponent,
    GameEndComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatProgressBarModule,
        HttpClientModule
    ],
  providers: [PlayerService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
