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

@NgModule({
  declarations: [UserComponent, UserListComponent, UserAddComponent, UserDetailComponent, UserListItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    UserModuleRouting
  ],
  providers :[UserService, UserResolver]
})

export class UserModule { }
