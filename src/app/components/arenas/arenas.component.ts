import { Component, OnInit } from '@angular/core';
import { ArenaService } from 'src/app/services/arena.service';


@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {
  check = [false,false,false,false,false];
  numberChecked = 2;
  arenas: any;

  constructor(private arenaService: ArenaService) {
    this.check[this.numberChecked] = true;
  }

  ngOnInit(): void {
    this.arenaService.getArenas().subscribe(

      (arena) => {
        this.arenas = arena;
        console.log(this.arenas);
      }
    )

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
