import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {IPlayer} from "../../models/iplayer.model";
import {PlayerService} from "../../services/player.service";
import {GameService} from "../../services/game.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-game',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  alert= "";
  title = AppComponent.title;
  players: IPlayer[] = [];
  player1DefaultName = "player 1";
  player2DefaultName = "player 2";

  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
  ) {}

/*
  FetchPlayer(playerName: string,  index :  number): void{
    playerName = playerName.trim();
    let player = this.playerService.getPlayerByUsername(playerName);
    if (playerName && player ){
       player.subscribe(player => {
        this.players[index] = {
          id : (player as any).id,
          username : (player as any).username
       }
      });
      console.log(this.players)
    }
  }
*/

  startGame(player1Name: string, player2Name: string): void {
    player1Name = player1Name.trim();
    player2Name = player2Name.trim();
    this.playerService.getPlayerByUsername(player1Name).subscribe({
        next: (resp) => {
          if(resp != null){
            this.players[0] = resp
            console.log(this.players[0])

          }
          else{
            this.players[0] = {
              username : player1Name,
            }
            this.playerService.addPlayer(this.players[0]).subscribe({
              next : (data) =>{
                this.players[0] = {
                  username : player1Name,
                  id : data as any
                }
                console.log(this.players[0])
              }

            });
          }
        },
        error: (e) =>{
          console.log("error");
        },
      });


      this.playerService.getPlayerByUsername(player2Name).subscribe({
        next: (resp) => {
          if(resp != null){
            this.players[1] = resp
            console.log(this.players[1])
          }
          else{
            this.players[1] = {
              username : player2Name,
            }
            this.playerService.addPlayer(this.players[1]).subscribe({
              next : (data) =>{
                this.players[1] = {
                  username : player2Name,
                  id : data as any
                }
                console.log(this.players[1])
              }
            });
          }
        },
        error: (e) =>{
          console.log("error");
        }
      });
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
      console.log("Game Continued");
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