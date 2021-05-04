import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public collection = this.firestore.collection('test');
  public collection$ = this.collection.valueChanges();
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    console.log(this.collection$);
  }

  click(): void {
    this.collection.add({ test: 'test' });
  }

  signin(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
