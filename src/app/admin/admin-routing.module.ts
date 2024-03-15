import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [
  {
    path:'', 
    component:AdminComponent,
    children:[
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
