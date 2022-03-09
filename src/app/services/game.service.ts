import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ICharacter } from '../models/icharacter.model';
import { IPlayer } from '../models/iplayer.model';
import { FiguresComponent } from '../components/figures/figures.component';
import { IRound } from '../models/iround.model';
import { API_URL } from '../global';
import { IGame } from '../models/igame.model';




@Injectable({
  providedIn: 'root'
})
export class GameService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private gameUrl = `${API_URL}/api/Round/rounds`;

  constructor(
    private http: HttpClient
  ) { }

  continueGame(pseudo1: string, pseudo2: string) {
    console.log("Game of users "+ pseudo1+ " and "+ pseudo2+": continue");
  }


  addRound(round : IRound) {
    return this.http.post<IRound>(this.gameUrl, round, this.httpOptions)
  }

  createGame(game: IGame) {
    console.log(`calling : ${API_URL}/api/game/games`)
    return this.http.post<IGame>(`${API_URL}/api/game/games`, game, this.httpOptions)
  }

  attack(aPid : number, aCid : number, damage : number){
    console.log(`calling : ${API_URL}/api/game/games/attack/attackedPlayer/${aPid}/attackedCharacter/${aCid}/damage/${damage} `)
    return this.http.post<IGame>(`${API_URL}/api/game/games/attack/attackedPlayer/${aPid}/attackedCharacter/${aCid}/damage/${damage}`,this.httpOptions)
  }
}
