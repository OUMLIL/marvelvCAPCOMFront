import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICharacter } from '../models/icharacter.model';
import { IRound } from '../models/iround.model';
import { IPlayer } from '../models/iplayer.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  character: ICharacter[] = new Array<ICharacter>(6);
  players : IPlayer[] = new Array<IPlayer>(2)
  round : IRound = new IRound()

  dataSource = new BehaviorSubject<ICharacter[]>(this.character);
  playersSource = new BehaviorSubject<IPlayer[]>(this.players)
  roundSource = new BehaviorSubject(this.round)
  

  currentData = this.dataSource.asObservable();
  currentPlayers = this.playersSource.asObservable();
  currentRound = this.roundSource.asObservable();


  constructor() { 
  }


  updateData(data: ICharacter[]) {
    this.dataSource.next(data)
  }
  
  updatePlayers(data: IPlayer[]){
      this.playersSource.next(data)
  }

  updateRound(data: IRound) {
    this.roundSource.next(data)
  }

}