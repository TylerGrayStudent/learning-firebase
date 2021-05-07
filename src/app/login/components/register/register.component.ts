import { LoginService } from './../../../shared/services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { loginForm } from '../../data/login-form';
import { Router } from '@angular/router';

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
    private login: LoginService,
    private router: Router
  ) {}

  onRegister(form: FormGroup): void {
    this.login
      .register(this.login.getLoginInfoFromForm(form))
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onNeedToLoginClick(): void {
    this.router.navigate(['login']);
  }
}
