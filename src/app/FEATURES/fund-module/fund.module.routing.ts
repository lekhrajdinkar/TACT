import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FundListComponent } from './fund-list/fund-list.component';
import { FundAddComponent } from './fund-add/fund-add.component';
import { FundDetailComponent } from './fund-detail/fund-detail.component';
import { AuthGaurdGuard } from 'src/app/auth-gaurd.guard';
import { FofTableComponent } from './fof-table/fof-table.component';


const routes: Routes = [
  { path: 'fund-module/get-all/:_id', component: FundDetailComponent},
  { path: 'fund-module/get-all', component: FundListComponent},
  { path: 'fund-module/add-fund', component: FundAddComponent, canActivate : [AuthGaurdGuard] },
  { path: 'fund-module/fof', component: FofTableComponent }
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
