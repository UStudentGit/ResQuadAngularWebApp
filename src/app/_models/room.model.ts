import { Corporation } from './corporation.model';

export class Room {
  name: string;
  corporationId: number;
  roomId: number;
  corporation: Corporation;


  constructor(name: string, roomId: number, corporation: Corporation) {
    this.name = name;
    this.roomId = roomId;
    this.corporation = corporation;
  }
}
