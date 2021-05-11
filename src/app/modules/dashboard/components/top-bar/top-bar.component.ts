import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { APPLICATION_TITLE } from '../../../../shared/data/strings';
import { UserService } from './../../../../core/user/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  @Output() menuClicked = new EventEmitter();
  @Input() profilePic: string | undefined;
  public title = APPLICATION_TITLE;

  constructor(private userService: UserService, private router: Router) {}

  onLogoutClick(): void {
    this.userService.logout().then(() => this.router.navigate(['login']));
  }

  onManageUserClick(): void {}

  onManageSettingsClick(): void {}
}
