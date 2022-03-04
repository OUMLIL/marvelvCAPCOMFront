import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayer} from "./iplayer.model";

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private urlPlayer = 'https://localhost:7087/';

  constructor(
    private http:HttpClient
     ) {}
  /*
  addPlayer(playerName: string){
    console.log("player " + playerName + " added");
    this.http.post<IPlayer>(this.url +, { id: 37, username: "UserTestAngular" });
  } */

  addPlayer(playerName : string) : Observable<IPlayer> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<IPlayer>(this.urlPlayer + 'api/User/users/add',
      {id : '37' , username : playerName}, httpOptions);
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
