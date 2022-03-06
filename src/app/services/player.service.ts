import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayer} from "../models/iplayer.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private urlPlayer = 'https://localhost:7087/api/User/users';

  constructor(
    private http: HttpClient
     ) {}

  addPlayer(player: IPlayer){
    console.log("Calling this");
    console.log(player);
    return this.http.post<IPlayer>(this.urlPlayer, player, this.httpOptions);
  }


  getPlayers() {
    console.log("GET CALL !!");
    return this.http.get<IPlayer[]>(this.urlPlayer);
  }

  getPlayerByUsername(username : string){
    console.log("by username ;)");
    const url = `${this.urlPlayer}/byUsername/${username}`;
    console.log(url);
    return this.http.get<IPlayer>(url);
  }

  


  /*
  addPlayer(player: unknown): Observable<IPlayer> {
    return this.http.post<IPlayer>('', player, this.httpOptions);
  }





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
