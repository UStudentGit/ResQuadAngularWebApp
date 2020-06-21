import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Happening } from '../_models/happening.model';
import { Room } from '../_models/room.model';
import { Corporation } from '../_models/corporation.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  createEvent(EventName: string, Code: string, RoomId: number): any {
    return this.http.post(this.apiUrl + '/event', { name: EventName, password: Code, roomId: RoomId });
  }

  joinToEvent(Password: string) {
    return this.http.post(this.apiUrl + '/toEvent', {password: Password});
  }

  getUserEvents(): Observable<Array<Happening>> {
    return this.http.get(this.apiUrl + '/userEvents').pipe(
      map((events: Array<any>) => this.toHappening(events))
    );
  }

  getAdminEvents(): Observable<Array<Happening>> {
    return this.http.get(this.apiUrl + '/adminEvents').pipe(
      map((events: Array<any>) => this.toHappening(events))
    );
  }

  getAllEvents(): Observable<Array<Happening>> {
    return this.http.get(this.apiUrl + '/allEvents').pipe(
      map((events: Array<any>) => this.toHappening(events))
    );
  }

  toHappening(happenings: Array<any>): Array<Happening> {
    return happenings.map((event: any) =>
      new Happening(
        event.name,
        event.id,
        event.administratorId,
        event.password,
        new Room(event.room.name, event.room.id, new Corporation(event.room.corporation.id, event.room.corporation.name))
      )
    );
  }
}
