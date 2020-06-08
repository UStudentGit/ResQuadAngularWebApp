import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from '../_models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  getCorpoRooms(corpoId: number): Observable<Array<Room>> { // czy nie powinno to zwracac tez id korpo?
    return this.http.get(this.apiUrl + `/corpoRooms?id=${corpoId}`).pipe(
      map((rooms: any) => rooms.map((room: any) =>
        this.toRoom(room, corpoId))
      )
    );
  }

  createRoom(roomName: string, corpoId: number): Observable<any> {
    return this.http.post(this.apiUrl + '/room', { corporationId: corpoId, name: roomName });
  }

  toRoom(room: any, corpoId: number) {
    return new Room(room.name, corpoId, room.id);
  }
}
