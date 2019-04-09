import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserAddComponent, UserDetailComponent],
  imports: [
    CommonModule
  ],
  providers :[UserService]
})
export class UserModuleModule { }
