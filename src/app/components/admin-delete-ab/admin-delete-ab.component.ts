import { Component, OnInit } from '@angular/core';
import {AbilityService} from "../../services/ability.service";
import {IAbility} from "../../models/iability.model";

@Component({
  selector: 'app-admin-delete-ab',
  templateUrl: './admin-delete-ab.component.html',
  styleUrls: ['./admin-delete-ab.component.scss']
})
export class AdminDeleteAbComponent implements OnInit {

  selectedDevice: any
  selectedAb: IAbility = new IAbility();
  abilities : any

  constructor(
    private abilityService: AbilityService)
  { }

  ngOnInit(): void {
    this.abilityService.getAllAbilities().subscribe(
      {
        next :(data) => this.abilities = data,
        complete: () => {
          console.log(this.abilities)
        }
      });
  }

  deleteAbility(){
    console.log(this.selectedAb)
  }
}
