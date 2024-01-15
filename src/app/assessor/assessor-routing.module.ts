import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessorComponent } from './assessor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalVerificationComponent } from './personal-verification/personal-verification.component';
import { ServiceLevelAgreementComponent } from './service-level-agreement/service-level-agreement.component';
import { ClientsComponent } from './clients/clients.component';
import { ReportComponent } from './report/report.component';
import { SlotsComponent } from './slots/slots.component';
import { ProfileComponent } from './profile/profile.component';
// import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
// import { Tomal2Component } from './tomal2/tomal2.component';
// import { Towre2Component } from './towre2/towre2.component';
// import { Wrat5Component } from './wrat5/wrat5.component';
// import { WritComponent } from './writ/writ.component';
// import { ArtComponent } from './art/art.component';
// import { DashComponent } from './dash/dash.component';
// import { GoartComponent } from './goart/goart.component';

const routes: Routes = [
  {
    path:'', 
    component:AssessorComponent,
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
        path:'profile', 
        component:ProfileComponent
      },
      {
        path:'personal-verification', 
        component:PersonalVerificationComponent
      },
      {
        path:'servicelevel-agreement', 
        component:ServiceLevelAgreementComponent
      },
      {
        path:'clients', 
        component:ClientsComponent
      },
      {
        path:'report', 
        component:ReportComponent
      },
      {
        path:'slots', 
        component:SlotsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessorRoutingModule { }
