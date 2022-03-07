import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICharacter } from '../models/icharacter.model';
import { IPlayer } from '../models/iplayer.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  character: ICharacter[] = new Array<ICharacter>(6);
  players : IPlayer[] = new Array<IPlayer>(2)

  datasource = new BehaviorSubject<ICharacter[]>(this.character);
  playersSource = new BehaviorSubject<IPlayer[]>(this.players)

  currentData = this.datasource.asObservable();
  currentPlayers = this.playersSource.asObservable();

  constructor() { 
  }

  updateData(data: ICharacter[]) {
    this.datasource.next(data)
  }

  updatePlayers(data: IPlayer[]){
      this.playersSource.next(data)
  }

}