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
  /*
  continueGame(pseudo: string): Observable<IRound> {
        const url = `${this.gameUrl}/continue/joueur/${pseudo}`;
        // JSON : joueur et chapitreVM
        return this.http.get<IRound>(url);
    }
   */


/*

    evenementGame(id: number, eventid: number): Observable<IRound> {
        const url = `${this.gameUrl}/joueur/${id}/evenement/${eventid}`;
        return this.http.get<IRound>(url);
    }

    attaquerSort(id: number, sortilegeId: number, monstre: IPersonnage): Observable<IRound> {
        const url = `${this.gameUrl}/joueur/${id}/combat/utiliser/sortilege/${sortilegeId}`;
        return this.http.post<IRound>(url, monstre);
    }

    attaquerObjet(id: number, objetId: number, monstre: IPersonnage): Observable<IRound> {
        const url = `${this.gameUrl}/joueur/${id}/combat/utiliser/sortilege/${objetId}`;
        return this.http.post<IRound>(url, monstre);
    }

    attaquer(id: number, monstre: IPersonnage): Observable<IRound> {
        const url = `${this.gameUrl}/joueur/${id}/combat/attaquer`;
        return this.http.post<IRound>(url, monstre);
    }

    choixGame(id: number, choixid: number): Observable<IRound> {
        console.log(id);
        console.log(choixid);
        const url = `${this.gameUrl}/joueur/${id}/choix/${choixid}`;
        return this.http.get<IRound>(url);
    }
 */
}
