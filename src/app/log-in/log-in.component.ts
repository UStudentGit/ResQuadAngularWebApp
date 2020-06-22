import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from '../_auth/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private auth: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    this.loading = true;
    this.auth
      .login(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      )
      .subscribe(
        (res: any) => {
          this.router.navigate(['/home']);
          this.snackBar.open('Login Succesfull!', 'OK', { duration: 4000 });
          this.loading = false;
        },
        (error) => {
          this.snackBar.open(error.error.message, 'OK', { duration: 4000 });
          console.log('Error when login. Error:');
          console.log(error);
          this.loading = false;
        }
      );
  }

  toRegister(): void {
    this.router.navigate(['/signUp']);
  }
}
