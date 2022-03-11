import { Component, OnInit } from '@angular/core';
import {AbilityService} from "../../services/ability.service";

@Component({
  selector: 'app-admin-add-ab',
  templateUrl: './admin-add-ab.component.html',
  styleUrls: ['./admin-add-ab.component.scss']
})
export class AdminAddAbComponent implements OnInit {

  AbilityName = "MyAbility";
  damage = 40;
  selectedDevice: any

  constructor(
    private abilityService: AbilityService)
  { }

  ngOnInit(): void {
  }

  addAbility(){
    console.log(this.AbilityName)
    console.log(this.damage)
  }

}
