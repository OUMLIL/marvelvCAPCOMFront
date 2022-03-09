import { Component, OnInit } from '@angular/core';
import { IAbility } from 'src/app/models/iability.model';
import { AbilityService } from 'src/app/services/ability.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  abilities : any
  CharacterDefaultName = "Character"

  constructor(private abilityService: AbilityService,) { }

  ngOnInit(): void {
    this.abilityService.getAllAbilities().subscribe(
      {
        next :(data) => this.abilities = data,
        complete: () => console.log(this.abilities[0])
      });
  }

}
