import { Component, Directive, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {IPlayer} from "../../models/iplayer.model";
import {PlayerService} from "../../services/player.service";
import {GameService} from "../../services/game.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  alert= "";
  title = AppComponent.title;
  players: IPlayer[] = new Array<IPlayer>(2);
  player1DefaultName = "player 1";
  player2DefaultName = "player 2";

  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
  ) {}

  startGame(player1Name: string, player2Name: string): void {
    player1Name = player1Name.trim();
    player2Name = player2Name.trim();
    this.playerService.getPlayers().subscribe({
      next: (resp) => {
        console.log(resp)
        this.players = resp
      },
      complete: () => 
      { 
        this.playerService.getPlayerByName("test").subscribe(
          {
            next: resp => console.log("second call", resp),
            error: (error) => console.log(error),
            complete: () => console.log("call completed?")
          }
        )
        console.log('complete') 
        console.log(this.players[1].username)
      }
    }
    );
  }

  ngOnInit(): void {
  }

}