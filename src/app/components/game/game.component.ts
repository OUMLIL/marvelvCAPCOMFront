import { Component, OnInit } from '@angular/core';
import {ICharacter} from "../../models/icharacter.model";
import {style} from "@angular/animations";
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  heroCharacterHP = 100;
  enemyCharacterHP = 100;

  // 0, 1 :players (hero, enemy) => [attacking,damaged]
  attackingScene ={
    0: [false, false],
    1: [false, false]
  };

  attackingPlayer = 0;

  heroSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png";
  enemySprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png";

  heroChoices = {
    1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png"}

  enemyChoices = {
    1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"}

  colors = {
    yellow: "#cccf00",
    green: "#35aa31",
    red: "#d95f5f"
  };

  constructor(private sharedDataService: SharedDataServiceService,) { }

  ngOnInit(): void {
    console.log(this.sharedDataService.currentRound.subscribe( e => console.log(e)))
  }

  attackPlayer(damage: number){
    switch (this.attackingPlayer) {
      case 0:
        this.enemyCharacterHP = this.enemyCharacterHP - damage;
        break;
      case 1:
        this.heroCharacterHP = this.heroCharacterHP - damage;
    }
    this.attackingScene[this.attackingPlayer] = [true, false];
    this.attackingScene[(this.attackingPlayer+1)%2] = [false, true];
    this.attackingPlayer = (this.attackingPlayer + 1) % 2;

  }

  changeCharacter(choiceId:number, charId:number){
    switch (charId) {
      case 0:
        let aux = this.heroSprite;
        this.heroSprite = this.heroChoices[choiceId];
        this.heroChoices[choiceId] = aux;
        break;
      case 1:
        let aux2 = this.enemySprite;
        this.enemySprite = this.enemyChoices[choiceId];
        this.enemyChoices[choiceId] = aux2;
    }
  }

}
