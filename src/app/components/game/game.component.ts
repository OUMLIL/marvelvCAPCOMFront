import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {IPlayer} from "../../player";
import {PlayerService} from "../../player.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  alert= "";
  title = AppComponent.title;
  player: IPlayer | undefined;

  constructor() {}
  /*
  startGame(playerName: string): void {
    playerName = playerName.trim();
    if (playerName) {
      this.playerService.addPlayer({ Nom: playerName.trim() }).subscribe(
        objet => {
          location.replace("/window/" + playerName.trim());
        },
        error => {
          switch (error.status) {
            case 400:
              this.alert = "Ce pseudo est déjà utilisé";
              break;
            default:
              this.alert = "Impossible de charger la partie";
          }
        }
      );
    }
  }

   */
  ngOnInit(): void {
  }

}
