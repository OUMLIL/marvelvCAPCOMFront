import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  alert= "Hey"
  title = AppComponent.title;

  constructor() { }

  ngOnInit(): void {
  }

}
