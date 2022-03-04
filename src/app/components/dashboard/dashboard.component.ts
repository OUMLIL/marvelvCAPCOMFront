import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {IPlayer} from "../../iplayer.model";
import {PlayerService} from "../../player.service";
import {GameService} from "../../game.service";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  alert= "";
  title = AppComponent.title;
  player: IPlayer | undefined;
  player1DefaultName = "player 1";
  player2DefaultName = "player 2";

  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
    //private http: HttpClient
  ) {}

  startGame(player1Name: string, player2Name: string): void {
    player1Name = player1Name.trim();
    player2Name = player2Name.trim();
    if (player1Name && player2Name) {
      this.playerService.addPlayer(player1Name);
      this.playerService.addPlayer(player2Name);
      console.log("Game Started");
    }
  }
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
   */


  continueGame(player1Name: string, player2Name: string){
    if (player1Name && player2Name) {
      this.gameService.continueGame(player1Name.trim(),player2Name.trim());
      console.log("Game Continued")
    }

  }
  /*
  continueGame(joueurNom: string): void {
      if (joueurNom) {
              this.gameService.continueGame(joueurNom.trim()).subscribe((game) => {
            location.replace("/window/" + game.joueur.Nom);
          },
          error => {
            switch (error.status) {
              case 404:
                this.alert = "Aucune partie pour ce pseudo";
                break;
              default:
                this.alert = "Impossible de reprendre la partie";
            }
          }
        );
      }
    }
   */


  ngOnInit(): void {
  }

}

