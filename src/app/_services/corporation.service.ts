import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Corporation } from '../_models/corporation.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporationService {
  apiUrl = 'http://whcp.pl:3200';
  chosenCorpoId = new Subject<number>();

  constructor(private http: HttpClient) { }

  initAndGetCorporations() {
    return this.http.get(this.apiUrl + '/allCorpos').pipe(
      tap((corporations: any) => {
        if (corporations.lenght !== 0) {
          this.chosenCorpoId.next(1);
        }
      }),
      map((corporations: any) => corporations.map((corporation: any) =>
        new Corporation(corporation.id, corporation.name))
      )
    );
  }

  getCorporations() {
    return this.http.get(this.apiUrl + '/allCorpos').pipe(
      map((corporations: any) => corporations.map((corporation: any) =>
        new Corporation(corporation.id, corporation.name))
      )
    );
  }

  updateCorporation(corpoId: number) {
    this.chosenCorpoId.next(corpoId);
  }

  getChosenCorpo(): Observable<number> {
    return this.chosenCorpoId.asObservable();
  }

}
