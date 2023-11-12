import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualRoutingModule } from './individual-routing.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { IndividualComponent } from './individual.component';
import { ControlComponent } from './control/control.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestionnaireComponent,
    IndividualComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    IndividualRoutingModule,
    ReactiveFormsModule
  ]
})
export class IndividualModule { }
