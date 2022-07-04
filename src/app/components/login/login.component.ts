import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  formdata: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.email = new FormControl();
    this.password = new FormControl();
    this.formdata = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onClickSubmit(): any {
    this.authService
      .login(this.formdata.getRawValue())
      .subscribe((isSuccess) => {
        if (isSuccess) {
          this.router.navigate(['/']);
        }
      });
    this.formdata.reset();
  }
}
