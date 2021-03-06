import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login/login-page.component';

@NgModule({
  declarations: [LoginPageComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
