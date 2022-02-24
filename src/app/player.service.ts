import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayer} from "./iplayer.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private urlPlayer = '';

  constructor(
    //private http:HttpClient
     ) {}

  addPlayer(playerName: string){
    console.log("player "+ playerName + " added");
  }
/*
  addPlayer(player: unknown): Observable<IPlayer> {
    return this.http.post<IPlayer>('', player, this.httpOptions);
  }
*/


/*
getJoueurs(): Observable<IJoueur[]> {
		return this.http.get<IJoueur[]>(this.urljoueur);
	}

	deleteJoueur(joueur: IJoueur | number): Observable<IJoueur> {
		const id = typeof joueur === 'number' ? joueur : joueur.Id;
		const url = `${this.urljoueur}/${id}`;

		return this.http.delete<IJoueur>(url, this.httpOptions);
	}
 */



}
