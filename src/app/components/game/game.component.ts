import { Component, OnInit } from '@angular/core';
import {ICharacter} from "../../models/icharacter.model";
import {style} from "@angular/animations";
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { IGame } from 'src/app/models/igame.model';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  player1CharacterHP = 100;
  player2CharacterHP = 100;
  player1CharacterHPInitial = 100;
  player2CharacterHPInitial = 100;

  game: IGame = new IGame();

  // 0, 1 :players (player1, player2) => [attacking,damaged]
  attackingScene ={
    0: [false, false],
    1: [false, false]
  };

  playingCharacP1 = 0;
  playingCharacP2 = 0;

  attackingPlayer = 0;

  player1Sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png";
  player2Sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png";

  player1Choices = {
    0: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png"}

  player2Choices = {
    0: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"}

  colors = {
    yellow: "#cccf00",
    green: "#35aa31",
    red: "#d95f5f"
  };

  constructor(private sharedDataService: SharedDataServiceService) { }

  ngOnInit(): void {
    console.log(this.sharedDataService.currentRound.subscribe( e => console.log(e)))
    this.sharedDataService.currentGame.subscribe(e => this.game = e)
    console.log(this.game.user1.username)
  }

  attackPlayer(damage: number){
    switch (this.attackingPlayer) {
      case 0:
        this.player2CharacterHP = this.player2CharacterHP - damage;
        break;
      case 1:
        this.player1CharacterHP = this.player1CharacterHP - damage;
    }
    this.attackingScene[this.attackingPlayer] = [true, false];
    this.attackingScene[(this.attackingPlayer+1)%2] = [false, true];
    this.attackingPlayer = (this.attackingPlayer + 1) % 2;
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

}
