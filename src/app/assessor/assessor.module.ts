import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
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
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs';

import { AssessorRoutingModule } from './assessor-routing.module';
import { AssessorComponent } from './assessor.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { MatBadgeModule} from '@angular/material/badge';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalVerificationComponent } from './personal-verification/personal-verification.component';
import { ServiceLevelAgreementComponent } from './service-level-agreement/service-level-agreement.component';
import { ClientsComponent } from './clients/clients.component';
import { SlotsComponent } from './slots/slots.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProfileComponent } from './profile/profile.component';
import { Step1Component } from './personal-verification/pages/step1/step1.component';
import { Step2Component } from './personal-verification/pages/step2/step2.component';
import { Step3Component } from './personal-verification/pages/step3/step3.component';
import { Step4Component } from './personal-verification/pages/step4/step4.component';
import { Step5Component } from './personal-verification/pages/step5/step5.component';
import { Step6Component } from './personal-verification/pages/step6/step6.component';
import { Step7Component } from './personal-verification/pages/step7/step7.component';
import { Step8Component } from './personal-verification/pages/step8/step8.component';
import { Report1Component } from './clients/report1/report1.component';
import { TestComponent } from './clients/test/test.component';
import { AddComponent } from './clients/add/add.component';
import { CtoppComponent } from './clients/test/tests/ctopp/ctopp.component';
import { TomalComponent } from './clients/test/tests/tomal/tomal.component';
import { TowreComponent } from './clients/test/tests/towre/towre.component';
import { WratComponent } from './clients/test/tests/wrat/wrat.component';
import { ArtComponent } from './clients/test/tests/art/art.component';
import { WritComponent } from './clients/test/tests/writ/writ.component';
import { DashComponent } from './clients/test/tests/dash/dash.component';
import { GoartComponent } from './clients/test/tests/goart/goart.component';
import { FormComponent } from './clients/form/form.component';
import { ScreeningResultComponent } from './clients/screening-result/screening-result.component';
import { Page1ResultComponent } from './clients/screening-result/page1-result/page1-result.component';
import { Page2ResultComponent } from './clients/screening-result/page2-result/page2-result.component';
import { Page3ResultComponent } from './clients/screening-result/page3-result/page3-result.component';
import { Page4ResultComponent } from './clients/screening-result/page4-result/page4-result.component';
import { Page5ResultComponent } from './clients/screening-result/page5-result/page5-result.component';


@NgModule({
  declarations: [
    AssessorComponent,
    DashboardComponent,
    PersonalVerificationComponent,
    ServiceLevelAgreementComponent,
    ClientsComponent,
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
    TestComponent,
    CtoppComponent,
    TomalComponent,
    TowreComponent,
    WratComponent,
    ArtComponent,
    WritComponent,
    DashComponent,
    GoartComponent,
    AddComponent,
    FormComponent,
    ScreeningResultComponent,
    Page1ResultComponent,
    Page2ResultComponent,
    Page3ResultComponent,
    Page4ResultComponent,
    Page5ResultComponent
  ],
  imports: [
    CommonModule,
    AssessorRoutingModule,
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
    MatExpansionModule,
    MatToolbarModule
  ],
  providers: [DatePipe]
})
export class AssessorModule { }
