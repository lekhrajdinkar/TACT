import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FundListComponent } from './fund-list/fund-list.component';
import { FundAddComponent } from './fund-add/fund-add.component';


const routes: Routes = [
  { path: 'fund-module/get-all', component: FundListComponent },
  { path: 'fund-module/add-fund', component: FundAddComponent }
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
