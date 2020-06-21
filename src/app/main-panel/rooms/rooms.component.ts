import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/_services/room.service';
import { Room } from 'src/app/_models/room.model';
import { AuthorizationService } from 'src/app/_auth/authorization.service';
import { EventService } from 'src/app/_services/event.service';
import { AttendanceService } from 'src/app/_services/attendance.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(
    private roomService: RoomService,
    private authService: AuthorizationService,
    private eventService: EventService,
    private attendanceService: AttendanceService) { }

  ngOnInit(): void {
  }

  createRoom(roomName: string, corpoId: number) {
    console.log('createRoom');
    console.log(roomName + ' ' + corpoId);
    this.roomService.createRoom(roomName, corpoId).subscribe((res: any) => console.log(res),
      error => console.log(error));
  }

  getCorpoRooms(corpoId: number) {
    console.log('getCorpoRooms');
    this.roomService.getCorpoRooms(corpoId).subscribe((res: Array<Room>) =>
      console.log(res), error => console.log(error));
  }

  getUser() {
    console.log('getUser');
    this.authService.getUser().subscribe(res => console.log(res),
      error => console.log(error));
  }

  getUserEvents() {
    console.log('getUserEvents');
    this.eventService.getUserEvents().subscribe(res => console.log(res),
      error => console.log(error));
  }

  getAdminEvents() {
    console.log('getAdminEvents');
    this.eventService.getAdminEvents().subscribe(res => console.log(res),
      error => console.log(error));
  }

  getAllEvents() {
    console.log('getAllEvents');
    this.eventService.getAllEvents().subscribe(res => console.log(res),
      error => console.log(error));
  }

  getUserAttendanceList() {
    console.log('getUserAttendanceList');
    this.attendanceService.getUserAttendanceLists().subscribe(res => console.log(res),
      error => console.log(error));
  }

  getAttendanceList(eventId: number) {
    console.log('getAttendanceList');
    this.attendanceService.getAttendanceList(eventId).subscribe(res => console.log(res),
      error => console.log(error));
  }

  createAttendanceList(eventId: number, name: string) {
    console.log('createAttendanceList');
    this.attendanceService.createAttendanceList(new Date(), eventId, name, new Date()).subscribe(res => console.log(res),
      error => console.log(error));
  }
}
