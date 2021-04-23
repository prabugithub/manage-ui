import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserCredentialsComponent } from "./create-user-credentials/create-user-credentials.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const routes: Routes = [
    {
        path: 'user-dashboard/create-user-credentails',
        component: CreateUserCredentialsComponent
      },
      {
        path: 'user-dashboard/user-details',
        component: UserDetailsComponent
      }
]

@NgModule({
    declarations:[
       
    ],
    imports: [
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [
        RouterModule
    ]
})
export class UserRouterModule {

}