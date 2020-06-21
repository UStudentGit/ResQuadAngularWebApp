import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/_services/event.service';
import { Happening } from 'src/app/_models/happening.model';

@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrls: ['./menu-selection.component.scss']
})
export class MenuSelectionComponent implements OnInit {
  happenings: Array<Happening>;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.router.navigate(['home']);
    this.getUserEvents();
  }

  getUserEvents() {
    this.eventService.getUserEvents().subscribe((happenings: Array<Happening>) => {
      console.log(happenings);
      this.happenings = happenings;
    });
  }
}
