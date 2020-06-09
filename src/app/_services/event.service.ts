import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  createEvent(EventName: string, Code: string, RoomId: number) {
    return this.http.post(this.apiUrl + '/event', { name: EventName, password: Code, roomId: RoomId });
  }


}
