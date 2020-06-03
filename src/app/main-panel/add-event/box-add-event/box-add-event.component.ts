import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-add-event',
  templateUrl: './box-add-event.component.html',
  styleUrls: ['./box-add-event.component.scss']
})
export class BoxAddEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toReturn(): void {
    this.router.navigate(['/createEvent']);
  }
}
