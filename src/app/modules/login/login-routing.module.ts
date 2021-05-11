import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
