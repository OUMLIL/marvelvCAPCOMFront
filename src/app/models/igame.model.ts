import {IPlayer} from './iplayer.model';

export class IGame {
    Id: Number = 0;
    FirstPid: IPlayer = new IPlayer();
    SecondPid: IPlayer = new IPlayer();

    P1char1: Number = 0;
    P1char2: Number = 0;
    P1char3: Number = 0;

    P2char1: Number = 0;
    P2char2: Number = 0;
    P2char3: Number = 0;

    Winner: IPlayer  = new IPlayer();
    Arena: Number = 0;
}
