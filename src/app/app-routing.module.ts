import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path:'', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path:'assessor', 
    loadChildren: () => import('./assessor/assessor.module').then(m => m.AssessorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
