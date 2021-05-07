import { LoginService } from './../../../shared/services/login.service';
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
    private login: LoginService,
    private router: Router
  ) {}

  onLogin(form: FormGroup): void {
    this.login
      .login(this.login.getLoginInfoFromForm(form))
      .then((res) => {
        this.router.navigate(['home']);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onNeedToRegisterClick(): void {
    this.router.navigate(['login/register']);
  }
}
