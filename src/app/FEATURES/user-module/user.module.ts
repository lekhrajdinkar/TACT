import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModuleRouting } from './user.module.routing';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserResolver } from './user.resolver';
import { TactCommonModule } from 'src/app/common/common.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user.Reducer';
import { OrgChartComponent } from './org-chart/org-chart.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserAddComponent, UserDetailComponent, UserListItemComponent, OrgChartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    UserModuleRouting,
    TactCommonModule,
    StoreModule.forFeature('userState', userReducer), //step -3 register Reducer => users will be property of tactState
  ],
  providers :[UserService, UserResolver]
})

export class UserModule { }
