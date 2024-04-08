import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-employee/:id',
    component: ViewEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-employee/:id',
    component: UpdateEmployeeComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'register' },
];
