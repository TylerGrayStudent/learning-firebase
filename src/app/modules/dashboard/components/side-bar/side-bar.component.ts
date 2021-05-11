import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/user/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  public picture$ = this.userService.picture$;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
