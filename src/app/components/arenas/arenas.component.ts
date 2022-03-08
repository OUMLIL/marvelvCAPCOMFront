import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, ignoreElements } from 'rxjs';
import { IRound } from 'src/app/models/iround.model';
import { IPlayer } from 'src/app/models/iplayer.model';
import { GameService } from 'src/app/services/game.service';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { IGame } from 'src/app/models/igame.model';
import {ArenaService} from "../../services/arena.service";
@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {
  check = [false,false,false,false,false,false,false,false,false,false];
  numberChecked = 2;
  characters: any
  round :  IRound = new IRound()
  winner : number = 0
  allReady: boolean = false
  arenas: any;

  constructor(
    private sharedDataService: SharedDataServiceService,
    private gameService: GameService,
    private arenaService: ArenaService
  ) {
    this.check[this.numberChecked] = true;
  }

  ngOnInit(): void {
    this.arenaService.getArenas().subscribe(
      (arena) => {
        this.arenas = arena;
        console.log(this.arenas);
      }
    );

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
    this.round = new IRound(0, player1, player2, player1_chars, player2_chars, this.winner, 1)
  }

  addRound() {
    this.createRound()
    this.gameService.addRound(this.round).subscribe({
      next: (data) => console.log(data),
      complete: () => {
        console.log('round posted')
        this.sharedDataService.updateRound(this.round)
        this.allReady = true
      }
    })
  }

  createGame() {
    
  }

  playGame() {
    this.router.navigate(['game'])
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
