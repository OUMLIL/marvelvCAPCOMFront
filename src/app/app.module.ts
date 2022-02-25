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
import { GameService } from './game.service';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FiguresComponent,
    ArenasComponent,
    GameComponent,
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
