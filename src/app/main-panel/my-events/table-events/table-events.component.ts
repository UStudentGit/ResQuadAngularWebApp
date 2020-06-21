import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/_services/event.service';
import { Happening } from 'src/app/_models/happening.model';

@Component({
  selector: 'app-table-events',
  templateUrl: './table-events.component.html',
  styleUrls: ['./table-events.component.scss']
})
export class TableEventsComponent implements OnInit {
  adminHappenings: Array<Happening>;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.getAdminEvents();
  }

  getAdminEvents() {
    this.eventService.getAdminEvents().subscribe((happenings: Array<Happening>) => {
      console.log(happenings);
      this.adminHappenings = happenings;
    });
  }

  toAddEvent(): void {
    this.router.navigate(['/addEvent']);
  }

}
