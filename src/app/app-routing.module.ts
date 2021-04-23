import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { CreateUserCredentialsComponent } from './users/create-user-credentials/create-user-credentials.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'user-dashboard',
    component: UsersDashboardComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
