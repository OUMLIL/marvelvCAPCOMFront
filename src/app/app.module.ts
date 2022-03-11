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
import { PlayerService } from './services/player.service';
import { AdminPanelComponent } from './components/admin-add-character/admin-panel.component';
import {FormsModule} from "@angular/forms";
import { GameEndComponent } from './components/game-end/game-end.component';
import { AdminAddArenaComponent } from './components/admin-add-arena/admin-add-arena.component';
import { AdminDeleteArenaComponent } from './components/admin-delete-arena/admin-delete-arena.component';
import { AdminDeleteCharacterComponent } from './components/admin-delete-character/admin-delete-character.component';
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
    AdminDeleteArenaComponent,
    AdminDeleteCharacterComponent
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
