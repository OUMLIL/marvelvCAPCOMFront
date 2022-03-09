import { Component, OnInit } from '@angular/core';
import {ICharacter} from "../../models/icharacter.model";
import {style} from "@angular/animations";
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { IGame } from 'src/app/models/igame.model';
import { ignoreElements } from 'rxjs';
import {GameService} from "../../services/game.service";
import {IRound} from "../../models/iround.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  player1CharacterHP = 0;
  player2CharacterHP = 0;

  player1CharacterHPInitial = 0;
  player2CharacterHPInitial = 0;

  game: IGame = new IGame();
  round: IRound = new IRound();

  // 0, 1 :players (player1, player2) => [attacking,damaged]
  attackingScene ={
    0: [false, false],
    1: [false, false]
  };

  playingCharacP1 = 0;
  playingCharacP2 = 0;

  attackingPlayer = 0;
  attackingPlayer_backId = [0,0];

  remainingCharacters={
    0: [true,true,true],
    1: [true,true,true]
  }

  player1Choices = {
    0: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png"}

  player2Choices = {
    0: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"}

  constructor(
    private sharedDataService: SharedDataServiceService,
    private gameService: GameService,
    private router: Router,
    )
{ }

  ngOnInit(): void {
    console.log(this.sharedDataService.currentRound.subscribe( e => console.log(e)))
    this.sharedDataService.currentGame.subscribe(e => this.game = e)
    this.sharedDataService.currentRound.subscribe(e => this.round = e)

    this.player1CharacterHPInitial =
      this.game.p1_characs[0].heathPoints+
      this.game.p1_characs[1].heathPoints+
      this.game.p1_characs[2].heathPoints;

    this.player2CharacterHPInitial =
      this.game.p2_characs[0].heathPoints+
      this.game.p2_characs[1].heathPoints+
      this.game.p2_characs[2].heathPoints;

    this.player1CharacterHP =  this.player1CharacterHPInitial;
    this.player2CharacterHP =  this.player2CharacterHPInitial;

    this.attackingPlayer_backId = [this.game.user1.id, this.game.user2.id];
    console.log(this.game.user1.username)
    console.log(this.game.p1_characs[0].heathPoints)
  }

  attackPlayer(damage: number){
    let attackedCharacter = 0;
    switch (this.attackingPlayer) {
      case 0:
         attackedCharacter = this.game.p2_characs[this.playingCharacP2].id;
        break;
      case 1:
         attackedCharacter = this.game.p1_characs[this.playingCharacP1].id;
    }
    this.attackingScene[this.attackingPlayer] = [true, false];
    this.attackingScene[(this.attackingPlayer+1)%2] = [false, true];
    this.attackingPlayer = (this.attackingPlayer + 1) % 2;

    console.log(this.attackingPlayer_backId[this.attackingPlayer],attackedCharacter,damage)

    return this.gameService.attack(this.attackingPlayer_backId[this.attackingPlayer],attackedCharacter,damage).subscribe({
      next : (data) => {
        console.log(data)
        this.sharedDataService.updateGame(data)
      },
      complete: () => {
        this.sharedDataService.currentGame.subscribe(e => console.log(e))
        this.updateHealthPoints(this.attackingPlayer)
        console.log("enemy attacked hehe")
      }
    })
  }

  changeCharacter(choiceId:number, playerId:number){
    switch (playerId) {
      case 0:
        this.playingCharacP1 = choiceId
        break;
      case 1:
        this.playingCharacP2 = choiceId
    }
  }

  percentage1(){
    return (this.player1CharacterHP/this.player1CharacterHPInitial)*100;
  }

  percentage2(){
    return (this.player2CharacterHP/this.player2CharacterHPInitial)*100;
  }

  updateHealthPoints(i:number){
    switch (i) {
      case 0:
        this.player1CharacterHP = 0;
        for (let j=0; j<3; j++){

            if (this.remainingCharacters[i][j] && this.game.p1_characs[j].heathPoints > 0) {
              this.player1CharacterHP += this.game.p1_characs[j].heathPoints
            } else {
              this.remainingCharacters[i][j] = false;
              this.playingCharacP1 = this.remainingCharacters[i].indexOf(true);
              this.endGame(i);
              console.log(this.playingCharacP1)
            }
          }

        console.log(this.remainingCharacters);
        break;
      case 1:
        this.player2CharacterHP = 0;
        for (let j=0; j<3; j++) {

            if (this.remainingCharacters[i][j] && this.game.p2_characs[j].heathPoints > 0) {
              this.player2CharacterHP += this.game.p2_characs[j].heathPoints
            } else {
              this.remainingCharacters[i][j] = false;
              this.playingCharacP2 = this.remainingCharacters[i].indexOf(true);
              this.endGame(i);
              console.log(this.playingCharacP2)
            }
          }

        console.log(this.remainingCharacters);
    }
  }

  endGame(i:number){
    if(this.remainingCharacters[i].indexOf(true) == -1){
      this.round.Winner = this.attackingPlayer_backId[(i+1)%2];
      this.sharedDataService.updateRound(this.round);
      this.router.navigate(["/"])
    }

  }
}
