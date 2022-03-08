import {IPlayer} from './iplayer.model';

export class IRound {
    Id: Number = 0;
    FirstPid: number;
    SecondPid: number;

    P1char1: Number = 0;
    P1char2: Number = 0;
    P1char3: Number = 0;

    P2char1: Number = 0;
    P2char2: Number = 0;
    P2char3: Number = 0;

    Winner: number = 0;
    Arena: Number = 0;

    constructor(Id: number = 0, player1: number = 0, player2: number = 0,
                P1_characs: number[] = [0, 0, 0], P2_characs: number[] = [0, 0, 0],
                winner: number = 0, Arena: number = 0) {
        this.Id = Id
        
        this.FirstPid = player1
        this.SecondPid = player2
        
        this.P1char1 = P1_characs[0]
        this.P1char2 = P1_characs[1] 
        this.P1char3 = P1_characs[2]

        this.P2char1 = P2_characs[0]
        this.P2char2 = P2_characs[1]
        this.P2char3 = P2_characs[2]
        
        this.Winner = winner
        this.Arena = Arena
        
    }   

}
