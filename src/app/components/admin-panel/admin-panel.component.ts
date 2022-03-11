import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { IAbility } from 'src/app/models/iability.model';
import { ICharacter } from 'src/app/models/icharacter.model';
import { AbilityService } from 'src/app/services/ability.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  CharacterName = "NewCharacter";

  abilities : any
  Character : ICharacter = new ICharacter()

  imgFront ='https://i.ibb.co/xhrf1KC/m1.png'
  imgBack ="https://i.ibb.co/WymZxSd/m0.png"

  finalUrlIng = "WymZxSd/m0 xhrf1KC/m1" ;
  Hp = 100;
  selectedDevice: any

  selectedAb1: IAbility = new IAbility();
  selectedAb2: IAbility = new IAbility();
  selectedAb3: IAbility = new IAbility();
  selectedAb4: IAbility = new IAbility();
  selectedAbilities :IAbility[] = [];

  constructor(
    private abilityService: AbilityService,
    private characterService: CharacterService)
  { }

  ngOnInit(): void {
    this.abilityService.getAllAbilities().subscribe(
      {
        next :(data) => this.abilities = data,
        complete: () => {
          this.selectedAb1 = this.abilities[0]
          this.selectedAb2 = this.abilities[1]
          this.selectedAb3 = this.abilities[2]
          this.selectedAb4 = this.abilities[3]
          console.log(this.selectedAb1)
        }
      });
  }

  chooseUrlFront(urlFront: string){
    this.imgFront = urlFront;
  }

  chooseUrlBack(urlBack: string){
    this.imgBack = urlBack;
  }

  addChar(){
    this.finalUrlIng =  this.finalUrlIng.replace(
      this.finalUrlIng.split(" ",3)[1],
      this.imgFront.replace("https://i.ibb.co/", "").replace(".png","")
    ).replace(
      this.finalUrlIng.split(" ",3)[0],
      this.imgBack.replace("https://i.ibb.co/", "").replace(".png","")
    )
    console.log(this.CharacterName)
    console.log(this.selectedAb1)
    console.log(this.selectedAb2)
    console.log(this.selectedAb3)
    console.log(this.selectedAb4)
    console.log(this.finalUrlIng)
    console.log(this.Hp)

    this.Character.CharName = this.CharacterName
    this.Character.Side = this.finalUrlIng
    this.Character.HeathPoints = this.Hp

    this.Character.ab1Id = (this.selectedAb1 as any).id
    this.Character.ab2Id = (this.selectedAb2 as any).id
    this.Character.ab3Id = (this.selectedAb3 as any).id
    this.Character.ab4Id = (this.selectedAb4 as any).id

    this.characterService.addCharacter(this.Character).subscribe(
      {
        next: data => console.log(data)
      }
    );
  }

}
