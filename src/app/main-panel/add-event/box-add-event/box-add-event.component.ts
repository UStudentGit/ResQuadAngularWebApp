import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/_models/room.model';
import { RoomService } from 'src/app/_services/room.service';
import { EventService } from 'src/app/_services/event.service';
import { CorporationService } from 'src/app/_services/corporation.service';
import { Corporation } from 'src/app/_models/corporation.model';

@Component({
  selector: 'app-box-add-event',
  templateUrl: './box-add-event.component.html',
  styleUrls: ['./box-add-event.component.scss']
})
export class BoxAddEventComponent implements OnInit {
  name = '';
  code = '';
  roomId: number;
  corporations: Array<any>;
  rooms: Array<Room>;
  loading = false;

  constructor(private roomService: RoomService, private eventService: EventService, private corpService: CorporationService) { }

  ngOnInit(): void {
    this.getCorporation();
    this.getRooms(1);
  }

  getCorporation() {
    this.corpService.getAllCorporations().subscribe((corps: Array<Corporation>) => {
      this.corporations = corps;
      console.log(corps);
    }, error => console.log(error));
  }

  getRooms(corpoId: number) {
    this.roomService.getCorpoRooms(corpoId).subscribe((rooms: Array<Room>) => {
      this.rooms = rooms;
      console.log(this.rooms);
    }, error => console.log(error));
  }

  addEvent() {
    this.loading = true;
    console.log('addEvent');
    console.log(this.name + ' ' + this.code + ' ' + this.roomId);
    this.eventService.createEvent(this.name, this.code, this.roomId).subscribe((res: any) => {
      alert(res.message);
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }
}
