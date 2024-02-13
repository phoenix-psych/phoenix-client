import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from './individual.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreeningComponent } from './screening/screening.component';

const routes: Routes = [
  {
    path:'', 
    component:IndividualComponent,
    children:[
      {
        path:'', 
        component:DashboardComponent
      },
      {
        path:'dashboard', 
        component:DashboardComponent
      },
      {
        path:'assessment', 
        component:AssessmentComponent
      },
      {
        path:'screening', 
        component:ScreeningComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualRoutingModule { }
