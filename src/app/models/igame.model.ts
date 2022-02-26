import { IPlayer } from './iplayer.model';

export interface IGame {
    Id: Number;
    FirstPid: IPlayer;
    SecondPid: IPlayer;

    P1char1: Number;
    P1char2: Number;
    P1char3: Number;

    P2char1: Number;
    P2char2: Number;
    P2char3: Number;

    Winner: IPlayer;
    Arena: Number;
}
