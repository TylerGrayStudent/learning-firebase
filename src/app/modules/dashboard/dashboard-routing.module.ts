import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-page/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'photos',
        loadChildren: () =>
          import('../photos/photos.module').then((m) => m.PhotosModule),
      },
      {
        path: 'peer',
        loadChildren: () =>
          import('../peer/peer.module').then((m) => m.PeerModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
