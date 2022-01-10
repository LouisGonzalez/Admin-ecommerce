import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'init',
        component: ReportComponent,
        canActivate: [LoginGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
