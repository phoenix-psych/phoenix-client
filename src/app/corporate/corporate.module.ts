import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CorporateRoutingModule } from './corporate-routing.module';
import { CorporateComponent } from './corporate.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CorporateComponent
  ],
  imports: [
    CommonModule,
    CorporateRoutingModule,

    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    ReactiveFormsModule,
    FormsModule,
    DatePipe
  ]
})
export class CorporateModule { }
