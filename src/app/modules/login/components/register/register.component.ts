import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../core/user/user.service';
import { loginForm } from '../../data/login-form';
import { ToolboxService } from './../../../../shared/services/toolbox.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  public form = this.fb.group(loginForm);

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toolbox: ToolboxService
  ) {}

  onRegister(form: FormGroup): void {
    this.userService
      .register(this.userService.getLoginInfoFromForm(form))
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onNeedToLoginClick(): void {
    this.router.navigate(['login']);
  }
}
