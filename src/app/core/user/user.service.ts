import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface LoginInfo {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private auth: AngularFireAuth,
    private fs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  public user$ = this.auth.user;
  public loggedIn$ = this.auth.user.pipe(map((user) => !!user));
  public profile$ = this.user$.pipe(
    switchMap((user) => {
      if (user?.uid) {
        return this.fs
          .collection('profiles')
          .doc(user?.uid || '')
          .valueChanges();
      }
      return EMPTY;
    })
  );
  public picture$ = this.profile$.pipe(
    switchMap((profile: any) => {
      return this.storage.ref(profile['profile-picture']).getDownloadURL();
    })
  );

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
