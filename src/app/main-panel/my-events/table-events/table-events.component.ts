import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-table-events',
  templateUrl: './table-events.component.html',
  styleUrls: ['./table-events.component.scss']
})
export class TableEventsComponent implements OnInit {

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
    this.eventService.getEvents().subscribe(res => console.log(res));
  }

  getEvents() {
    console.log('getEvents');
  }

  toAddEvent(): void {
    this.router.navigate(['/addEvent']);
  }

}
