import { LoginInfo } from '../../login/pages/login/login-page.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  login(info: LoginInfo): Promise<any | never> {
    return this.auth.signInWithEmailAndPassword(info.email, info.password);
  }

  register(info: LoginInfo): Promise<any | never> {
    return this.auth.createUserWithEmailAndPassword(info.email, info.password);
  }

  getLoginInfoFromForm(form: FormGroup): LoginInfo {
    const email = form.get('email')?.value;
    const password = form.get('password')?.value;
    return {
      email,
      password,
    };
  }
}
