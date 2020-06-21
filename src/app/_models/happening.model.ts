import { Room } from './room.model';

export class Happening {
  name: string;
  id: number;
  ownerId: number;
  code: string;
  room: Room;

  constructor(name: string, id: number, ownerId: number, code: string, room: Room) {
    this.name = name;
    this.ownerId = ownerId;
    this.id = id;
    this.code = code;
    this.room = room;
  }
}
