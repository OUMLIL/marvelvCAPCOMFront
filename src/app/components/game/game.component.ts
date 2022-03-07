import { Component, OnInit } from '@angular/core';
import {ICharacter} from "../../models/icharacter.model";
import {style} from "@angular/animations";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  heroCharacterHP = 100;
  enemyCharacterHP = 100;

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

  constructor() { }

  ngOnInit(): void {
  }

  changeHp(damage: number, charHP: number){
    switch (charHP) {
      case 1:
        this.heroCharacterHP = this.heroCharacterHP - damage;
        break;
      case 2:
        this.enemyCharacterHP = this.enemyCharacterHP - damage;
    }
  }

  changeCharacter(choiceId:number, charId:number){
    switch (charId) {
      case 1:
        let aux = this.heroSprite;
        this.heroSprite = this.heroChoices[choiceId];
        this.heroChoices[choiceId] = aux;
        break;
      case 2:
        let aux2 = this.enemySprite;
        this.enemySprite = this.enemyChoices[choiceId];
        this.enemyChoices[choiceId] = aux2;

    }
  }

}
