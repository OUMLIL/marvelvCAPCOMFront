import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICharacter } from '../models/icharacter.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  character: ICharacter[] = new Array<ICharacter>(6);
  datasource = new BehaviorSubject<ICharacter[]>(this.character);
  currentData = this.datasource.asObservable();

  constructor() { 
  }

  updateData(data: ICharacter[]) {
    this.datasource.next(data)
  }

}
