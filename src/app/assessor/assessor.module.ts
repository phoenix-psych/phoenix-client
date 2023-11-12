import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Materi from "@angular/material";

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs';

import { AssessorRoutingModule } from './assessor-routing.module';
import { AssessorComponent } from './assessor.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalVerificationComponent } from './personal-verification/personal-verification.component';
import { ServiceLevelAgreementComponent } from './service-level-agreement/service-level-agreement.component';
import { ClientsComponent } from './clients/clients.component';
import { ReportComponent } from './report/report.component';
import { SlotsComponent } from './slots/slots.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProfileComponent } from './profile/profile.component';
import { Step1Component } from './personal-verification/pages/step1/step1.component';
import { Step2Component } from './personal-verification/pages/step2/step2.component';
import { Step3Component } from './personal-verification/pages/step3/step3.component';
import { Step4Component } from './personal-verification/pages/step4/step4.component';
import { Step5Component } from './personal-verification/pages/step5/step5.component';
import { Step6Component } from './personal-verification/pages/step6/step6.component';
import { Step7Component } from './personal-verification/pages/step7/step7.component';
import { Step8Component } from './personal-verification/pages/step8/step8.component';
import { Report1Component } from './report/report1/report1.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { Tomal2Component } from './tomal2/tomal2.component';
import { Towre2Component } from './towre2/towre2.component';
import { Wrat5Component } from './wrat5/wrat5.component';
import { WritComponent } from './writ/writ.component';
import { ArtComponent } from './art/art.component';

@NgModule({
  declarations: [
    AssessorComponent,
    AddComponent,
    ListComponent,
    DashboardComponent,
    PersonalVerificationComponent,
    ServiceLevelAgreementComponent,
    ClientsComponent,
    ReportComponent,
    SlotsComponent,
    ProfileComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Report1Component,
    MiscellaneousComponent,
    Tomal2Component,
    Towre2Component,
    Wrat5Component,
    WritComponent,
    ArtComponent
  ],
  imports: [
    CommonModule,
    AssessorRoutingModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,

    ReactiveFormsModule,
    FormsModule,
    DatePipe,
    MatBadgeModule,
    MatCardModule ,
    MatStepperModule,
    MatProgressBarModule,
    MatExpansionModule

  ]
})
export class AssessorModule { }
