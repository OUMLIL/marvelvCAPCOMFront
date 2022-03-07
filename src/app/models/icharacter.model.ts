import { IAbility } from "./iability.model";

export class ICharacter {
    Id: number = 0;
    CharName: string = "";
    cardType: string = "";
    Side: string = "";
    ab1Id: number = 0;
    ab2Id: number = 0;
    ab3Id: number = 0;
    ab4Id: number = 0;
    HeathPoints: number = 0;
    Abilities: IAbility[] = [];

    constructor(Id: number = 0, CharName: string = "", cardType: string = "",  side: string = "", ab1Id: number = 0, ab2Id: number = 0
        , ab3Id: number = 0, ab4Id: number = 0) {
            this.Id = Id;
            this.CharName = CharName;
            this.cardType = cardType;
            this.Side = side;
            this.ab1Id= ab1Id;
            this.ab2Id = ab2Id;
            this.ab3Id = ab3Id;
            this.ab4Id = ab4Id;
            this.HeathPoints = this.HeathPoints;
            this.Abilities = [];
    }      

}    
