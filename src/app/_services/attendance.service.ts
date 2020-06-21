import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  createAttendanceList(EndTime: Date, EventId: number, Name: string, StartTime: Date) {
    return this.http.post(this.apiUrl + '/attendancelist', [
      {
        endTime: EndTime,
        eventId: EventId,
        name: Name,
        startTime: StartTime
      }
    ]);
  }

  getAttendanceList(eventId: number): any {
    return this.http.get(this.apiUrl + `/attendancelist/${eventId}`);
  }

  getUserAttendanceLists() {
    return this.http.get(this.apiUrl + '/userAttendanceLists');
  }

  getAbsence(attendanceListId: number) {
    return this.http.get(this.apiUrl + `/absence/${attendanceListId}`);
  }

  getPresence(attendanceListId: number) {
    return this.http.get(this.apiUrl + `/presence/${attendanceListId}`);
  }

}
