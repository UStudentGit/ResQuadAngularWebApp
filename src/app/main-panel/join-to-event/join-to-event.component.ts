import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-join-to-event',
  templateUrl: './join-to-event.component.html',
  styleUrls: ['./join-to-event.component.scss']
})
export class JoinToEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  joinToEvent(code: any) {
    console.log(code);
    this.eventService.joinToEvent(code).subscribe(res => console.log(res));
  }
}
