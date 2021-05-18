import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from '../../../../core/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  public arr: number[] | undefined;

  public profile$ = this.userService.profile$;

  public sideNavOpened = true;
  constructor(private userService: UserService) {}

  logout(): void {
    this.userService.logout();
  }

  toggleSidenav(sideNavOpened: boolean): void {
    this.sideNavOpened = !sideNavOpened;
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
