import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../services/character.service";
import {ICharacter} from "../../models/icharacter.model";

@Component({
  selector: 'app-admin-delete-character',
  templateUrl: './admin-delete-character.component.html',
  styleUrls: ['./admin-delete-character.component.scss']
})
export class AdminDeleteCharacterComponent implements OnInit {


  selectedDevice: any
  selectedChar: ICharacter = new ICharacter();
  characters : any

  constructor(
    private characterService : CharacterService)
  { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      {
        next :(data) => this.characters = data,
        complete: () => {
          this.selectedChar = this.characters[0]
          console.log(this.characters)
        }
      });
  }

  deleteChar(){
    console.log(this.selectedChar)
    this.characterService.deleteCharacter((this.selectedChar as any).id).subscribe()
  }

}
