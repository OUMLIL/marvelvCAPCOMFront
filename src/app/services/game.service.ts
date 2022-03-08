import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ICharacter } from '../models/icharacter.model';
import { IPlayer } from '../models/iplayer.model';
import { FiguresComponent } from '../components/figures/figures.component';
import { IGame } from '../models/igame.model';
import { API_URL } from '../global';




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


  addRound(round : IGame) {
    return this.http.post<IGame>(this.gameUrl, round, this.httpOptions)
  }

  /*
  continueGame(pseudo: string): Observable<IGame> {
        const url = `${this.gameUrl}/continue/joueur/${pseudo}`;
        // JSON : joueur et chapitreVM
        return this.http.get<IGame>(url);
    }
   */


/*

    evenementGame(id: number, eventid: number): Observable<IGame> {
        const url = `${this.gameUrl}/joueur/${id}/evenement/${eventid}`;
        return this.http.get<IGame>(url);
    }

    attaquerSort(id: number, sortilegeId: number, monstre: IPersonnage): Observable<IGame> {
        const url = `${this.gameUrl}/joueur/${id}/combat/utiliser/sortilege/${sortilegeId}`;
        return this.http.post<IGame>(url, monstre);
    }

    attaquerObjet(id: number, objetId: number, monstre: IPersonnage): Observable<IGame> {
        const url = `${this.gameUrl}/joueur/${id}/combat/utiliser/sortilege/${objetId}`;
        return this.http.post<IGame>(url, monstre);
    }

    attaquer(id: number, monstre: IPersonnage): Observable<IGame> {
        const url = `${this.gameUrl}/joueur/${id}/combat/attaquer`;
        return this.http.post<IGame>(url, monstre);
    }

    choixGame(id: number, choixid: number): Observable<IGame> {
        console.log(id);
        console.log(choixid);
        const url = `${this.gameUrl}/joueur/${id}/choix/${choixid}`;
        return this.http.get<IGame>(url);
    }
 */
}
