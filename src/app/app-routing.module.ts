import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './components/game/game.component';
import { FiguresComponent } from './components/figures/figures.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'figures', component: FiguresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
