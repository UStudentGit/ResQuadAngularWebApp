import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Corporation } from '../_models/corporation.model';

@Injectable({
  providedIn: 'root'
})
export class CorporationService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  getAllCorporations() {
    return this.http.get(this.apiUrl + '/allCorpos').pipe(
      map((corporations: any) => corporations.map((corporation: any) =>
        new Corporation(corporation.id, corporation.name))
      )
    );
  }
}
