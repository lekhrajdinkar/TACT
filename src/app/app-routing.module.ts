import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, //login
  { path: 'login', component: LoginComponent }, //login
  
  //old routes
  { path: 'home', component: HomeComponent },
  { path: 'fundmtn', component: FundMaintenanceComponent },
  { path: 'rpt', component: ReportComponent  },

  { path: 'user-module', loadChildren:'./FEATURES/user-module/user.module#UserModule'}, 

  { path: '**', component: ErrorComponent } //no match > login 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:false, preloadingStrategy: PreloadAllModules, useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
