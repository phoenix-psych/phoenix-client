import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualRoutingModule } from './individual-routing.module';
import { IndividualComponent } from './individual.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ScreeningComponent } from './screening/screening.component';
import { Page1Component } from './screening/page1/page1.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { Page2Component } from './screening/page2/page2.component';
import { Page3Component } from './screening/page3/page3.component';
import { Page4Component } from './screening/page4/page4.component';
import { Page5Component } from './screening/page5/page5.component';

@NgModule({
  declarations: [
    IndividualComponent,
    DashboardComponent,
    AssessmentComponent,
    ScreeningComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
  ],
  imports: [

    CommonModule,
    IndividualRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
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
    MatCardModule ,
    MatToolbarModule,
    MatStepperModule,
    MatProgressBarModule,
    MatExpansionModule,

  ]
})
export class IndividualModule { }
