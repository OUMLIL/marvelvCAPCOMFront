import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGame } from '../../models/igame.model';
import { IRound } from '../../models/iround.model';
import { SharedDataServiceService } from '../../services/shared-data-service.service';

@Component({
  selector: 'app-game-end',
  templateUrl: './game-end.component.html',
  styleUrls: ['./game-end.component.scss']
})
export class GameEndComponent implements OnInit {


  round : IRound = new IRound()
  game : IGame = new IGame()
  currentWinner = ""
  currentLooser = ""
  winner = ""
  looser = ""

  constructor(
    private sharedDataService : SharedDataServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sharedDataService.currentRound.subscribe(e => this.round  = e)
    this.sharedDataService.currentGame.subscribe(e  =>  this.game  = e)

    this.winner = this.game.user1.id == this.round.Winner ? this.game.user1.username : this.game.user2.username
    this.looser = this.game.user1.id == this.round.Winner ? this.game.user2.username : this.game.user1.username
    this.currentWinner = `Congratulations ${this.winner}`
    this.currentLooser = `${this.looser}, maybe next time, loooooser!`
  }

  playClicked() {
    this.router.navigate(['/'])
  }

}
