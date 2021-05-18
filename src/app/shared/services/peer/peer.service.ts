import { Injectable } from '@angular/core';
import Peer from 'peerjs';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './../../../core/user/user.service';
import { ToolboxService } from './../toolbox.service';

@Injectable({
  providedIn: 'root',
})
export class PeerService {
  private _peer = new BehaviorSubject<Peer>(new Peer());
  public peer$ = this._peer.asObservable();
  constructor(
    private userService: UserService,
    private toolbox: ToolboxService
  ) {}

  connect(id: string): void {
    console.log('connect');
    try {
      const peer = new Peer(id);
      this._peer.next(peer);
      this._peer.value.on('connect', () => console.log('connected'));
    } catch (error) {
      console.log(error);
    }
  }

  start(id: string): void {
    console.log('start');
    try {
      this._peer.value.connect(id);
    } catch (error) {
      console.log(error);
    }
  }
}
