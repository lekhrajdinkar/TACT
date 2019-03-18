import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  
  //{ path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fundmtn', component: FundMaintenanceComponent },
  { path: 'rpt', component: ReportComponent  },

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
