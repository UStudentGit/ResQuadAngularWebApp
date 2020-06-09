import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from '../_models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private jwtHelper = new JwtHelperService();
  apiUrl = 'http://whcp.pl:3200';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  saveToken(token: string) {
    console.log('token: ' + token);
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {  // in future i will use that in response.interceptor too
    if (this.getToken() == null) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(this.getToken());
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

  getUser() {
    return this.http.get(this.apiUrl + '/user').pipe(
      map((user: any) =>
        new User(user.name, user.surname, user.email, user.role)
      )
    );
  }
}

