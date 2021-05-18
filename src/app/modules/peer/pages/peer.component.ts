import { Component } from '@angular/core';
import { PeerService } from './../../../shared/services/peer/peer.service';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.scss'],
})
export class PeerComponent {
  public peer$ = this.peer.peer$;
  public id = '';
  constructor(private peer: PeerService) {}
  connect(id: string): void {
    this.peer.connect(id);
  }
  start(id: string): void {
    this.peer.start(id);
  }
}
