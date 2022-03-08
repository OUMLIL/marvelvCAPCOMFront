import { IPlayer } from "./iplayer.model";
import { ICharacter } from "./icharacter.model";
import { IAbility } from "./iability.model";
import { CharactersDetails } from "./CharactersDetails.model";
export class IGame {

    players = {
        player1 : {
            player: IPlayer,
            characters: CharactersDetails
        },
        
        player2 : {
            player: IPlayer,
            characters: CharactersDetails
        }
    }

    

}