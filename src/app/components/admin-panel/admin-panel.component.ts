import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { IAbility } from 'src/app/models/iability.model';
import { AbilityService } from 'src/app/services/ability.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  CharacterName = "NewCharacter";

  abilities : any

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
    private abilityService: AbilityService,)
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

  pickAbility(ab : IAbility, index : number){
    this.selectedAbilities[index] = ab;
    console.log(this.selectedAbilities[index])
  }

  chooseCharacterName(value: string){
    this.CharacterName = value;
    console.log(this.CharacterName)
  }

  pickHp(value:string){
    this.Hp = parseInt(value)
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
    console.log(this.selectedAbilities)
    console.log(this.selectedAb1)
    console.log(this.selectedAb2)
    console.log(this.selectedAb3)
    console.log(this.selectedAb4)
    console.log(this.finalUrlIng)
    console.log(this.Hp)
  }

}
