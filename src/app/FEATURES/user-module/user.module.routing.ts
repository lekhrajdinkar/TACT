import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OrgChartComponent } from './org-chart/org-chart.component';


const routes: Routes = 
[
  {
    path: '', component : UserComponent, children: 
    [
      { path: '', component: UserDetailComponent },
      { path: 'get-detail/:index', component: UserDetailComponent },
      { path: 'add-user', component: UserAddComponent },
      { path: 'org-chart', component: OrgChartComponent },
      
    ]
  }
];


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule],
})
export class UserModuleRouting { }
