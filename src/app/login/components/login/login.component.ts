import { UserService } from './../../../shared/services/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { loginForm } from '../../data/login-form';
import { Router } from '@angular/router';

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
    this.userService.login(this.userService.getLoginInfoFromForm(form));
  }

  onNeedToRegisterClick(): void {
    this.router.navigate(['login/register']);
  }
}
