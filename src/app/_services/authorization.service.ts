import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/login', { Email: email, Password: password });
  }

  register(Email: string, Name: string, Surname: string, Password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/register', { email: Email, name: Name, surname: Surname, password: Password });
  }

}

