import { Component, OnInit } from '@angular/core';
import {IAbility} from "../../models/iability.model";
import {AbilityService} from "../../services/ability.service";
import {ArenaService} from "../../services/arena.service";

@Component({
  selector: 'app-admin-add-arena',
  templateUrl: './admin-add-arena.component.html',
  styleUrls: ['./admin-add-arena.component.scss']
})
export class AdminAddArenaComponent implements OnInit {
  ArenaName = "MyArena";

//https://store-images.s-microsoft.com/image/apps.59174.13690668820466484.8f79044a-e86b-43f3-a112-8eaf5adc0f99.8f029a49-a418-4b1c-82a0-2a62dc5529d3?q=90&w=480&h=270
  img ='https://i.ibb.co/zbx4tbV/arena-example.jpg'

  selectedDevice: any

  constructor(
    private arenaService: ArenaService)
  { }

  ngOnInit(): void {
  }

  chooseUrl(url: string){
    this.img = url;
  }

  addArena(){
    console.log(this.img)
    console.log(this.ArenaName)
  }

}
