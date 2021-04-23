import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { CreateUserCredentialsComponent } from './create-user-credentials/create-user-credentials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRouterModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersDashboardComponent, 
    CreateUserCredentialsComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRouterModule,
    FormsModule
  ]
})
export class UsermoduleModule { }
