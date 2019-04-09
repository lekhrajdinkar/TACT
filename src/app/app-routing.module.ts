import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';
import { FundModuleRouting } from './FEATURES/fund-module/fund.module.routing';
import { FundListComponent } from './FEATURES/fund-module/fund-list/fund-list.component';
import { FundAddComponent } from './FEATURES/fund-module/fund-add/fund-add.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, //login
  { path: 'login', component: LoginComponent }, //login
  
  //old routes
  { path: 'home', component: HomeComponent },
  { path: 'fundmtn', component: FundMaintenanceComponent },
  { path: 'rpt', component: ReportComponent  },

  { 
    path: 'fund-module', children : [ 
      { path: 'get-all', component: FundListComponent },
      { path: 'add-fund', component: FundAddComponent }
    ]
  }, //2. Fund Module - FundModuleRouting

  { path: '**', component: LoginComponent } //no match > login 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
