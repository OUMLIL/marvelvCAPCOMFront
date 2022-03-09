import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FiguresComponent } from './components/figures/figures.component';
import { ArenasComponent } from './components/arenas/arenas.component';
import { GameComponent } from './components/game/game.component';
import { GameEndComponent } from './game-end/game-end.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'figures', component: FiguresComponent},
  { path: 'arenas', component: ArenasComponent},
  { path: 'game', component: GameComponent},
  { path: 'gameEnd', component: GameEndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
