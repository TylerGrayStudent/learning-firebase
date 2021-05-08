import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginForm } from '../../data/login-form';
import { UserService } from './../../../shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public form = this.fb.group(loginForm);

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  onLogin(form: FormGroup): void {
    this.userService
      .login(this.userService.getLoginInfoFromForm(form))
      .then(() => this.router.navigate(['home']))
      .catch((e) => console.log(e));
  }

  onNeedToRegisterClick(): void {
    this.router.navigate(['login/register']);
  }
}
