import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ICharacter } from '../models/icharacter.model';
import { API_URL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    console.log(`Getting Characters from: ${API_URL}/api/Character/characters`)
    return this.http.get<ICharacter[]>(`${API_URL}/api/Character/characters`)
  }

  getCharacterById(id: number) {
    return this.http.get<ICharacter>(`${API_URL}/api/Character/characters/${id}`)
  }

  //getCharacterByID
  //addCharacter
  //updateCharacter
  //deleteCharacter
}
