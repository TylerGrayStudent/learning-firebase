import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginForm } from '../../data/login-form';
import { UserService } from './../../../shared/services/user/user.service';

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
    private router: Router
  ) {}

  onRegister(form: FormGroup): void {
    this.userService
      .register(this.userService.getLoginInfoFromForm(form))
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onNeedToLoginClick(): void {
    this.router.navigate(['login']);
  }
}
