import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from 'src/app/_models/room.model';
import { RoomService } from 'src/app/_services/room.service';
import { EventService } from 'src/app/_services/event.service';
import { CorporationService } from 'src/app/_services/corporation.service';
import { Corporation } from 'src/app/_models/corporation.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-box-add-event',
  templateUrl: './box-add-event.component.html',
  styleUrls: ['./box-add-event.component.scss']
})
export class BoxAddEventComponent implements OnInit, OnDestroy {
  name = '';
  code = '';
  roomId: number;
  rooms: Array<Room>;
  corpoIdSub: Subscription;
  loading = false;


  constructor(private roomService: RoomService, private eventService: EventService, private corpService: CorporationService) { }

  ngOnInit(): void {
    this.subCorpoId();
  }

  subCorpoId() {
    this.corpoIdSub = this.corpService.getChosenCorpo().subscribe((corpoId: number) => {
      this.getRooms(corpoId);
    });
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

  ngOnDestroy() {
    this.corpoIdSub.unsubscribe();
  }
}
