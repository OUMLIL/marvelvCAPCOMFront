import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {
  check = [false,false,false,false,false];
  numberChecked = 2;
  characters: any
  constructor(
    private sharedDataService: SharedDataServiceService
  ) {
    this.check[this.numberChecked] = true;
  }

  ngOnInit(): void {
    this.sharedDataService.currentData.subscribe((e) => {
      this.characters = e
    });
    this.getCharacters()
  }

  getCharacters() {
    console.log(this.characters)
  }
  incrementCheck(){
    this.check[this.numberChecked] = false;
    this.numberChecked = (this.numberChecked + 1)%5;
    this.check[this.numberChecked] = true;
    console.log(this.numberChecked);
  }
  decrementCheck(){
    this.check[this.numberChecked] = false;
    this.numberChecked = this.numberChecked - 1;
    if (this.numberChecked<0){this.numberChecked= 4}
    this.check[this.numberChecked] = true;
    console.log(this.numberChecked);
  }
}
