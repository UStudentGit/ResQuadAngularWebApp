export class Happening {
  name: string;
  ownerId: number;
  eventId: number;
  code: string;
  roomId: number;

  constructor(name: string, ownerId: number, eventId: number, code: string, roomId: number) {
    this.name = name;
    this.ownerId = ownerId;
    this.eventId = eventId;
    this.code = code;
    this.roomId = roomId;
  }
}
