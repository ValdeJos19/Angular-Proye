import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BarraLateComponent } from './barra-late/barra-late.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'bbb', component: BarraLateComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'cuenta', component: CuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
