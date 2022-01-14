import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './components/report/report.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ]
})
export class UsersModule { }
