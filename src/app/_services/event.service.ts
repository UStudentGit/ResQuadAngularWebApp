import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Happening } from '../_models/happening.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  createEvent(EventName: string, Code: string, RoomId: number): any {
    return this.http.post(this.apiUrl + '/event', { name: EventName, password: Code, roomId: RoomId });
  }

  getEvents(): Observable<Array<Happening>> {
    return this.http.get(this.apiUrl + '/userEvents').pipe(
      map((events: Array<any>) => events.map((event: any) =>
        new Happening(event.name, event.administratorId, event.id, event.password, event.r.id))
      )
    );
  }

}
