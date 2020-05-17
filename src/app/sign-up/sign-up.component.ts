import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from '../_services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private auth: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onRegister(): void {
    this.loading = true;
    const registerData = this.registerForm.value;
    this.auth.register(registerData.email, registerData.name, registerData.surname, registerData.password).subscribe((res: any) => {
      this.router.navigate(['/logIn']);
      alert(res.message);
      this.loading = false;
    }, error => {
      alert(error.error.message);
      console.log('Error when login. Error:');
      console.log(error);
      this.loading = false;
    });
  }
  toLogin(): void {
    this.router.navigate(['/logIn']);
  }

}
