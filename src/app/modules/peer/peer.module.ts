import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PeerComponent } from './pages/peer.component';
import { PeerRoutingModule } from './peer-routing.module';

@NgModule({
  declarations: [PeerComponent],
  imports: [CommonModule, PeerRoutingModule, SharedModule],
})
export class PeerModule {}
