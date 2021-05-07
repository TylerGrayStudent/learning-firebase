import { LoginService } from '../../../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface LoginInfo {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public collection = this.firestore.collection('test');
  public collection$ = this.collection.valueChanges();

  constructor(
    private firestore: AngularFirestore,
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  click(): void {}

  onLogin(form: FormGroup): void {}

  register(): void {}
}
