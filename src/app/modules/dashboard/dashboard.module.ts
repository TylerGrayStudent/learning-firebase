import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, TopBarComponent, SideBarComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
