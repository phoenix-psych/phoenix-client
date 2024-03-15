import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminModule } from './admin.module';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [
  {
    path:'', 
    component:AdminModule,
    children:[
      {
        path:'', 
        component:ManageUserComponent
      },
      {
        path:'user', 
        component:ManageUserComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
