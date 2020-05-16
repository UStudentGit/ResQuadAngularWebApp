import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(Email: string, Password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/login', { email: Email, password: Password })
      .pipe(
        tap((res: any) => this.saveToken(res.token))
      );
  }

  register(Email: string, Name: string, Surname: string, Password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/register', { email: Email, name: Name, surname: Surname, password: Password });
  }

  logout() {
    localStorage.removeItem('token');
  }

}

