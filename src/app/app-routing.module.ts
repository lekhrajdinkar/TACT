import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, //login
  { path: 'login', component: LoginComponent }, //login
  
  //old routes
  { path: 'home', component: HomeComponent },
  { path: 'fundmtn', component: FundMaintenanceComponent },
  { path: 'rpt', component: ReportComponent  },

  { path: 'user-module', loadChildren:'./FEATURES/user-module/user.model#UserModule'}, 

  { path: '**', component: LoginComponent } //no match > login 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
