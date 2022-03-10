import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { IAbility } from '../models/iability.model';
import { API_URL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(
    private http: HttpClient
  ) { }


  getAbilityById(id: number) {
    return this.http.get<IAbility>(`${API_URL}/api/Ability/abilities/${id}`)
  }

  getAllAbilities(){
    return this.http.get<IAbility[]>(`${API_URL}/api/Ability/abilities`)
  }
}
