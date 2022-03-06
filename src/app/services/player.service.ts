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

  constructor(
    private http: HttpClient
     ) {}

  getPlayers() {
    return this.http.get<IPlayer[]>(`${API_URL}/api/User/users`)
  }
  
  getPlayerByName(name: string) {
    this.params.set("name", name)
    console.log(this.params)
    return this.http.get<IPlayer>(`${API_URL}/api/User/users/name`, {params:this.params})
  }

}
