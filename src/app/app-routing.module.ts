import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path:'', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'assessor', 
    loadChildren: () => import('./assessor/assessor.module').then(m => m.AssessorModule)
  },
  {
    path:'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'individual', 
    loadChildren: () => import('./individual/individual.module').then(m => m.IndividualModule)
  },
  {
    path:'corporate', 
    loadChildren: () => import('./corporate/corporate.module').then(m => m.CorporateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
