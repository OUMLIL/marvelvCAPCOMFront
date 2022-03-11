import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FiguresComponent } from './components/figures/figures.component';
import { ArenasComponent } from './components/arenas/arenas.component';
import { GameComponent } from './components/game/game.component';
import { GameEndComponent } from './components/game-end/game-end.component';
import { AdminPanelComponent } from './components/admin-add-character/admin-panel.component';
import {AdminAddArenaComponent} from "./components/admin-add-arena/admin-add-arena.component";
import {AdminDeleteCharacterComponent} from "./components/admin-delete-character/admin-delete-character.component";
import {AdminDeleteArenaComponent} from "./components/admin-delete-arena/admin-delete-arena.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'figures', component: FiguresComponent},
  { path: 'arenas', component: ArenasComponent},
  { path: 'game', component: GameComponent},
  { path: 'gameEnd', component: GameEndComponent},
  { path: 'admin-add-character', component: AdminPanelComponent},
  { path: 'admin-add-arena', component: AdminAddArenaComponent},
  { path: 'admin-delete-arena', component: AdminDeleteArenaComponent},
  { path: 'admin-delete-character', component: AdminDeleteCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
