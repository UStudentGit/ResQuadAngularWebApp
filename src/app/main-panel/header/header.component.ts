import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/_services/authorization.service';
import { Corporation } from 'src/app/_models/corporation.model';
import { CorporationService } from 'src/app/_services/corporation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  corporations: Array<Corporation>;

  constructor(private router: Router, private auth: AuthorizationService, private corpService: CorporationService) { }

  ngOnInit(): void {
    this.getCorporation();
  }

  getCorporation() {
    this.corpService.initAndGetCorporations().subscribe((corps: Array<Corporation>) => {
      this.corporations = corps;
      console.log(corps);
    }, error => console.log(error));
  }

  changeCorporation(corpoId: number) {
    console.log('changeCorporation, id: ' + corpoId);
    this.corpService.updateCorporation(corpoId);
  }

  logout() {
    this.router.navigate(['/logIn']);
    this.auth.logout();
  }
}
