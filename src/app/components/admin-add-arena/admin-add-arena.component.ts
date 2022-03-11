import { Component, OnInit } from '@angular/core';
import {IAbility} from "../../models/iability.model";
import {AbilityService} from "../../services/ability.service";

@Component({
  selector: 'app-admin-add-arena',
  templateUrl: './admin-add-arena.component.html',
  styleUrls: ['./admin-add-arena.component.scss']
})
export class AdminAddArenaComponent implements OnInit {
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
  }

}
