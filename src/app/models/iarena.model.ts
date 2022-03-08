export class IArena {
  id: number = 0;
  name: string = "";
  arenaImg: string = "";


  constructor(id: number, name: string, arenaImg: string) {
    this.id = id;
    this.name = name;
    this.arenaImg = arenaImg;

  }
}
