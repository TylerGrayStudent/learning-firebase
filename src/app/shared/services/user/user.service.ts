import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export interface LoginInfo {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user$ = this.auth.user;
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user$.subscribe((user) => {
      if (user) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  login(info: LoginInfo): Promise<any | never> {
    return this.auth.signInWithEmailAndPassword(info.email, info.password);
  }

  register(info: LoginInfo): Promise<any | never> {
    return this.auth.createUserWithEmailAndPassword(info.email, info.password);
  }

  logout(): Promise<any | never> {
    return this.auth.signOut();
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
