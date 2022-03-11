import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IArena } from '../models/iarena.model';
import { API_URL } from '../global';



@Injectable({
  providedIn: 'root'
})
export class ArenaService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(
    private http: HttpClient
  ) { }

  getArenas() {
    console.log(`Getting Arena from: ${API_URL}/api/Arena/arenas`)
    return this.http.get<IArena[]>(`${API_URL}/api/Arena/arenas`)
  }

  getArenaById(id: number) {
    return this.http.get<IArena>(`${API_URL}/api/Arena/arenas/${id}`)
  }

  addArena(arena : IArena){
    return this.http.post<IArena>(`${API_URL}/api/Arena/arenas`, arena, this.httpOptions )
  }

  deleteArena(id : number){
    return this.http.delete<IArena>(`${API_URL}/api/Arena/arenas/${id}`)
  }


}
