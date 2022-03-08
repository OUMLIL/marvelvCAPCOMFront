import { Component, OnInit } from '@angular/core';
import { from, ignoreElements } from 'rxjs';
import { IGame } from 'src/app/models/igame.model';
import { IPlayer } from 'src/app/models/iplayer.model';
import { GameService } from 'src/app/services/game.service';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {
  check = [false,false,false,false,false,false,false,false,false,false];
  numberChecked = 2;
  characters: any
  round : IGame = new IGame()
  winner : number = 0
  allReady: boolean = false
  constructor(
    private sharedDataService: SharedDataServiceService,
    private gameService: GameService
  ) {
    this.check[this.numberChecked] = true;
  }

  ngOnInit(): void {
    this.sharedDataService.currentData.subscribe((e) => {
      this.characters = e
    });
    console.log(this.characters)
    this.createRound()
  }


  createRound() {
    const player1_chars = new Array<number>(3)
    const player2_chars = new Array<number>(3)
    const player1 = this.characters.player1[0].id
    const player2 = this.characters.player2[0].id
    this.winner = player1
    for(let i = 0; i < 3; ++i) {
      player1_chars[i] = this.characters.player1[1][i+3].id
      player2_chars[i] = this.characters.player2[1][i+3].id
    }
    this.round = new IGame(0, player1, player2, player1_chars, player2_chars, this.winner, 1)
    console.log(this.round)
  }

  addRound() {
    this.createRound()
    this.gameService.addRound(this.round).subscribe({
      next: (data) => console.log(data),
      complete: () => {
        console.log('round posted')
        this.allReady = true
      }
    })
  }

  playGame() {
    if(this.allReady) {
      //this.route.navigate['UI']
    }
  }

  incrementCheck(){
    this.check[this.numberChecked] = false;
    this.numberChecked = (this.numberChecked + 1)%5;
    this.check[this.numberChecked] = true;
    console.log(this.numberChecked);
  }
  decrementCheck(){
    this.check[this.numberChecked] = false;
    this.numberChecked = this.numberChecked - 1;
    if (this.numberChecked<0){this.numberChecked= 4}
    this.check[this.numberChecked] = true;
    console.log(this.numberChecked);
  }

  pickArena(){
    console.log("picked arena ", this.numberChecked);
  }

}
