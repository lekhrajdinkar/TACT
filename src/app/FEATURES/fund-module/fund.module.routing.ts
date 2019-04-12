import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FundListComponent } from './fund-list/fund-list.component';
import { FundAddComponent } from './fund-add/fund-add.component';
import { FundDetailComponent } from './fund-detail/fund-detail.component';
import { AuthGaurdGuard } from 'src/app/auth-gaurd.guard';


const routes: Routes = [
  { path: 'fund-module/get-all/:id', component: FundDetailComponent, canActivate : [AuthGaurdGuard] },
  { path: 'fund-module/get-all', component: FundListComponent, canActivate : [AuthGaurdGuard]},
  { path: 'fund-module/add-fund', component: FundAddComponent, canActivate : [AuthGaurdGuard] }
];


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule],
})
export class FundModuleRouting { }
