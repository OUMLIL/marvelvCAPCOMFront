import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayer} from "./player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) {}

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private urlPlayer = '';

  addPlayer(player: unknown): Observable<IPlayer> {
    return this.http.post<IPlayer>('', player, this.httpOptions);
  }

  getPlayers(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>(this.urlPlayer);
  }

  deletePlayer(player: IPlayer | number): Observable<IPlayer> {
    const id = typeof player === 'number' ? player : player.Id;
    const url = `${this.urlPlayer}/${id}`;

    return this.http.delete<IPlayer>(url, this.httpOptions);
  }

}
