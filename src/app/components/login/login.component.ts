import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  formdata: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.email = new FormControl();
    this.password = new FormControl();
    this.formdata = this.formBuilder.group({
      userName: this.email,
    });
  }

  ngOnInit(): void {}

  onClickSubmit(): any {
    console.log(this.formdata);
    this.formdata.reset();
  }
}
