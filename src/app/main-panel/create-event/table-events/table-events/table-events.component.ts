import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-events',
  templateUrl: './table-events.component.html',
  styleUrls: ['./table-events.component.scss']
})
export class TableEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toAddEvent(): void {
    this.router.navigate(['/addEvent']);
  }

}
