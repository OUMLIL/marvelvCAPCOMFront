import { Component, Directive, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {IPlayer} from "../../models/iplayer.model";
import {PlayerService} from "../../services/player.service";
import {GameService} from "../../services/game.service";
import {HttpClient} from "@angular/common/http";
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  alert= "";
  title = AppComponent.title;
  players: any;
  player1DefaultName = "player 1";
  player2DefaultName = "player 2";
  allReady : boolean = false;

  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
    private sharedDataService: SharedDataServiceService,
  ) {
    this.players = new Array<IPlayer>();
  }


  startGame(player0Name: string, player1Name: string): void {
    player0Name = player0Name.trim()
    player1Name = player1Name.trim()
    var indexes = new Array<number>();
    var tempoPlayers = new Array<IPlayer>();
    const names: string[] = [player0Name, player1Name];
    this.playerService.getGamePlayers(player0Name, player1Name)
    .subscribe({
      next : (resp) =>{
        this.players = resp;
      },
      complete : () => {
        for (let index = 0; index < 2; index++) {
          if(this.players[index] == null)
          {
            indexes.push(index);
            tempoPlayers.push({
              username: names[index],
            });
          }
        }

        if(tempoPlayers.length > 0){
          this.playerService.addPlayers(tempoPlayers).subscribe({
            next : (resp) => {
              if(tempoPlayers.length == 2){
                this.players = resp;
                console.log(resp)
                this.sharedDataService.updatePlayers(this.players)
              }
              else{
                this.players[indexes[0]] = resp[0];
              }
            }
          });
        }
        this.allReady = true;
        this.sharedDataService.updatePlayers(this.players)
        console.log(this.players)
      }
    });
  }
  ngOnInit(): void {
  }


}
