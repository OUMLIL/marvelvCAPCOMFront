import { Component, OnInit } from '@angular/core';
import { IArena } from 'src/app/models/iarena.model';
import { ArenaService } from 'src/app/services/arena.service';
@Component({
  selector: 'app-admin-delete-arena',
  templateUrl: './admin-delete-arena.component.html',
  styleUrls: ['./admin-delete-arena.component.scss']
})
export class AdminDeleteArenaComponent implements OnInit {


  selectedDevice: any
  selectedar: IArena = new IArena(0, "", "");
  Arenas : any

  constructor(
    private arenaService : ArenaService)
  { }

  ngOnInit(): void {
    this.arenaService.getArenas().subscribe(
      {
        next :(data) => this.Arenas = data,
        complete: () => {
          this.selectedar = this.Arenas[0]
          console.log(this.Arenas)
        }
      });
  }

  deleteChar(){
    console.log(this.selectedar)
    this.arenaService.deleteArena((this.selectedar as any).id).subscribe()
  }
}
