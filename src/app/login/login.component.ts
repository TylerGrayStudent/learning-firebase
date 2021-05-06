import { LoginService } from './../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Email } from '../shared/models/email';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public collection = this.firestore.collection('test');
  public collection$ = this.collection.valueChanges();
  public form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private firestore: AngularFirestore,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  click(): void {
    this.collection.add({ test: 'test' });
  }

  onLogin(form: FormGroup): void {
    this.loginService
      .login(
        new Email(form.get('username')?.value),
        form.get('password')?.value
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  register(): void {
    this.loginService
      .register(new Email('wymngray@gmail.com'), 'g7yz8i8r')
      .then((res) => {
        console.log(res);
      });
  }
}
