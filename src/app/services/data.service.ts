import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private httpClient: HttpClient) {}
  login(data) {
    this.httpClient
      .post(this.apiUrl, JSON.parse(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe({
        next: (data) => {
          return data;
        },
        error: (error) => {
          console.log('Errorr user login', error);
        },
      });
  }

  getUser(user: User) {
    this.httpClient
      .get(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Bearer ' + user.token,
        },
      })
      .subscribe({
        next: (data) => {
          return data;
        },
        error: (error) => {
          console.log('Errorr downloading data', error);
        },
      });
  }
}
