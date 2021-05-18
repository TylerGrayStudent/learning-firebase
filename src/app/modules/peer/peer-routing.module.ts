import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeerComponent } from './pages/peer.component';

const routes: Routes = [{ path: '', component: PeerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerRoutingModule {}
