import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayer} from "../models/iplayer.model";
import { API_URL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  params = new HttpParams();
  urlPlayer = `${API_URL}/api/User/users`
  constructor(
    private http: HttpClient
     ) {}

  addPlayer(player: IPlayer){
    console.log("post");
    return this.http.post<IPlayer>(this.urlPlayer, player, this.httpOptions);
  }

  addPlayers(players : IPlayer[]){
    console.log("multiple post");
    return this.http.post<IPlayer>(this.urlPlayer, players , this.httpOptions);
  }


  getPlayers() {
    console.log("get all");
    return this.http.get<IPlayer[]>(this.urlPlayer);
  }

  getGamePlayers(username1 : string, username2 : string){
    console.log("2 players");
    const url = `${this.urlPlayer}/user1/${username1}/user2/${username2}`;
    console.log(url);
    return this.http.get<IPlayer>(url);
  }



  getPlayerByUsername(username : string){
    console.log("get by name");
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
