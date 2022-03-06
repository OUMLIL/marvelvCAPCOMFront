import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/icharacter.model';
import { CharacterService } from 'src/app/services/character.service';
import { AbilityService } from 'src/app/services/ability.service';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css'],
})

export class FiguresComponent implements OnInit {

  figuresSelected = 0;
  characters:  any;
  charactersPlayer1: any;
  charactersPlayer2: any;
  playerNum = this.figuresSelected % 2 +1;
  private cardTypes = ['card card--normal', 'card card--water', 'card card--electric', 'card card--fire', 'card card--psychic', 'card card--dark']

  constructor(
    private characterService: CharacterService,
    private abilityService: AbilityService,
  ) {
  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(

      (characs) => {
        let i = 0;
        this.characters = characs
        this.characters.map((element: ICharacter) => {
          element["cardType"] = this.cardTypes[i++]
        })
        console.log(this.characters);
      }
    )
    this.charactersPlayer1 = Array<ICharacter>();
    this.charactersPlayer2 = Array<ICharacter>();
  }

  chooseCharacter(data: any){
    this.figuresSelected++;
    this.playerNum = this.figuresSelected % 2 +1;
    this.characters.splice(this.characters.indexOf(data),1);
    if(this.playerNum == 1)
      this.charactersPlayer1.push(data);
    else
      this.charactersPlayer2.push(data);
    console.log(data.charName + " / player " + this.playerNum);
    console.log(this.characters);
    console.log(this.charactersPlayer1, this.charactersPlayer2)
  }
}


// var source   = document.getElementById("card-template").innerHTML;
// var template = Handlebars.compile(source);

// var eveelutions = [
//   {
//     name: "Eevee",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/1200px-133Eevee.png",
//     type: "normal",
//     hp: 55,
//     attack: 55,
//     defense: 50,
//     spAttack: 45,
//     spDefense: 65,
//     speed: 55,
//     ability1: "Run Away",
//     ability2: "Anticipation"
//   },
//   {
//     name: "Vaporeon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/f/fd/134Vaporeon.png/1200px-134Vaporeon.png",
//     type: "water",
//     hp: 130,
//     attack: 65,
//     defense: 60,
//     spAttack: 110,
//     spDefense: 95,
//     speed: 65,
//     ability1: "Absorb",
//     ability2: "Hydration"
//   },
//   {
//     name: "Jolteon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/b/bb/135Jolteon.png/1200px-135Jolteon.png",
//     type: "electric",
//     hp: 65,
//     attack: 65,
//     defense: 60,
//     spAttack: 110,
//     spDefense: 95,
//     speed: 130,
//     ability1: "Volt Absorb",
//     ability2: "Quick Feet"
//   },
//     {
//     name: "Flareon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/d/dd/136Flareon.png/1200px-136Flareon.png",
//     type: "fire",
//     hp: 65,
//     attack: 130,
//     defense: 60,
//     spAttack: 95,
//     spDefense: 110,
//     speed: 65,
//     ability1: "Flash Fire",
//     ability2: "Guts"
//   },
//   {
//     name: "Espeon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/a/a7/196Espeon.png/1200px-196Espeon.png",
//     type: "psychic",
//     hp: 65,
//     attack: 65,
//     defense: 60,
//     spAttack: 130,
//     spDefense: 95,
//     speed: 110,
//     ability1: "Synchronize",
//     ability2: "Magic Bounce"
//   },
//   {
//     name: "Umbreon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/3/3d/197Umbreon.png/600px-197Umbreon.png",
//     type: "dark",
//     hp: 95,
//     attack: 65,
//     defense: 110,
//     spAttack: 60,
//     spDefense: 130,
//     speed: 65,
//     ability1: "Synchronize",
//     ability2: "Inner Focus"
//   },
//   {
//     name: "Leafeon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/f/f5/470Leafeon.png/600px-470Leafeon.png",
//     type: "grass",
//     hp: 65,
//     attack: 110,
//     defense: 130,
//     spAttack: 60,
//     spDefense: 65,
//     speed: 95,
//     ability1: "Leaf Guard",
//     ability2: "Chlorophyll"
//   },
//   {
//     name: "Glaceon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/2/23/471Glaceon.png/600px-471Glaceon.png",
//     type: "ice",
//     hp: 65,
//     attack: 60,
//     defense: 110,
//     spAttack: 130,
//     spDefense: 95,
//     speed: 65,
//     ability1: "Snow Cloak",
//     ability2: "Ice Body"
//   },
//   {
//     name: "Sylveon",
//     imageAddress: "https://cdn.bulbagarden.net/upload/thumb/e/e8/700Sylveon.png/600px-700Sylveon.png",
//     type: "fairy",
//     hp: 95,
//     attack: 65,
//     defense: 65,
//     spAttack: 110,
//     spDefense: 130,
//     speed: 60,
//     ability1: "Cute Charm",
//     ability2: "Pixilate"
//   }
// ];

// var container = document.getElementById("cards");

// for (var i = 0; i < eveelutions.length; i++) {
//   var html    = template(eveelutions[i]);
//   container.insertAdjacentHTML("beforeend", html);
// }




