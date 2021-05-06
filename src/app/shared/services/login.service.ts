import { Email } from './../models/email';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  async login(email: Email, password: string): Promise<any | never> {
    try {
      if (!email.isValid()) {
        throw { error: 'Email is not valid' };
      }
      const results = this.auth.signInWithEmailAndPassword(
        email.value,
        password
      );
      return results;
    } catch (e: any) {
      console.log(e);
    }
  }

  async register(email: Email, password: string): Promise<any | never> {
    try {
      if (!email.isValid()) {
        throw { error: 'Email is not valid' };
      }
      const results = this.auth.createUserWithEmailAndPassword(
        email.value,
        password
      );
      return results;
    } catch (e: any) {
      console.log(e);
    }
  }
}
