import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/_services/room.service';
import { Room } from 'src/app/_models/room.model';
import { AuthorizationService } from 'src/app/_auth/authorization.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private roomService: RoomService, private authService: AuthorizationService) { }

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
}
