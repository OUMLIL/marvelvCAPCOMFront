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
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import {FormsModule} from "@angular/forms";
import { GameEndComponent } from './components/game-end/game-end.component';
import { AdminAddArenaComponent } from './components/admin-add-arena/admin-add-arena.component';
import { AdminAddAbComponent } from './components/admin-add-ab/admin-add-ab.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FiguresComponent,
    ArenasComponent,
    GameComponent,
    AdminPanelComponent,
    GameEndComponent,
    AdminAddArenaComponent,
    AdminAddAbComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatProgressBarModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [PlayerService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
