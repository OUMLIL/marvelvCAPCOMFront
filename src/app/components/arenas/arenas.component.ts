import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, ignoreElements } from 'rxjs';
import { IRound } from 'src/app/models/iround.model';
import { IPlayer } from 'src/app/models/iplayer.model';
import { GameService } from 'src/app/services/game.service';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { IGame } from 'src/app/models/igame.model';
import {ArenaService} from "../../services/arena.service";
import {IArena} from "../../models/iarena.model";
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
  game : IGame = new IGame()
  winner : number = 0
  allReady: boolean = false
  arenas: any;
  arena : IArena = new IArena(0,"","");

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
      }
    );

    this.sharedDataService.currentData.subscribe((e) => {
      this.characters = e
    });

    this.sharedDataService.currentGame.subscribe((e) => {
      this.game = e
    })

    this.createRound()
    this.createGame()
  }

  createRound() {
    const player1_chars = new Array<number>(3)
    const player2_chars = new Array<number>(3)
    const player1 = this.characters.player1[0].id
    const player2 = this.characters.player2[0].id
    this.winner = player1
    for(let i = 0; i < 3; ++i) {
      player1_chars[i] = this.characters.player1[1][i].id
      player2_chars[i] = this.characters.player2[1][i].id
    }
    this.round = new IRound(0, player1, player2, player1_chars, player2_chars, this.winner, this.numberChecked)
    this.arenaService.getArenaById(this.numberChecked).subscribe({
      next: data => {
        this.arena = data;
        this.sharedDataService.updateArena(this.arena);
      },
      complete: () => {
        console.log(this.arena);
      }
    })
  }

  addRound() {
    this.createRound()
    this.gameService.addRound(this.round).subscribe({
      next: (data) => {
        console.log("adding round", data)
        this.round = data
        this.sharedDataService.updateRound(this.round)
      },
      complete: () => {
        console.log('round posted')
        this.allReady = true
      }
    })
  }

  filtered(arr) {
    arr.filter(function (el) {
      return el != null
    })
    return arr
  }

  createGame() {
    this.gameService.createGame(this.game).subscribe({
      next: (data) => {
        console.log(data)
      },
      complete: () => {
        console.log('game object created')
      }
    })
  }

  playGame() {
    //this.router.navigate(['game'])
  }

  incrementCheck(){
    this.check[this.numberChecked] = false;
    this.numberChecked = (this.numberChecked + 1)%(this.arenas.length);
    this.check[this.numberChecked] = true;
    console.log(this.numberChecked);
  }
  decrementCheck(){
    this.check[this.numberChecked] = false;
    this.numberChecked = this.numberChecked - 1;
    if (this.numberChecked<0){this.numberChecked= (this.arenas.length-1)}
    this.check[this.numberChecked] = true;
    console.log(this.numberChecked);
    console.log(this.arenas)
  }


}
