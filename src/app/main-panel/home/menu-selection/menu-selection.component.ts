import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrls: ['./menu-selection.component.scss']
})
export class MenuSelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home']);
  }
}
