import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  login(email: string, password: string) {
    this.http.post(this.apiUrl, { Email: email, Password: password });
  }

}
