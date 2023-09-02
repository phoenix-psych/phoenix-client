import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessorComponent } from './assessor.component';

const routes: Routes = [
  {
    path:'', 
    component:AssessorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessorRoutingModule { }
