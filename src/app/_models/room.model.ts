export class Room {
  name: string;
  corporationId: number;
  roomId: number;

  constructor(name: string, corporationId: number, roomId?: number) {
    this.name = name;
    this.corporationId = corporationId;
    this.roomId = roomId;
  }
}
