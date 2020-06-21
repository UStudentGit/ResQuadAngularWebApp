import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from '../_models/room.model';
import { Corporation } from '../_models/corporation.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  getCorpoRooms(corpoId: number): Observable<Array<Room>> { // czy nie powinno to zwracac tez id korpo?
    return this.http.get(this.apiUrl + `/corpoRooms?id=${corpoId}`).pipe(
      map((rooms: any) => this.toRooms(rooms))
    );
  }

  createRoom(roomName: string, corpoId: number): Observable<any> {
    return this.http.post(this.apiUrl + '/room', { corporationId: corpoId, name: roomName });
  }

  toRooms(rooms: Array<any>): Array<Room> {
    return rooms.map((room: any) =>
      new Room(room.name, room.id, new Corporation(room.corporation.id, room.corporation.name))
    );
  }
}
