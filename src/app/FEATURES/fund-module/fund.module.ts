import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundComponent } from './fund/fund.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FundService } from './fund.service';
import { FundAddComponent } from './fund-add/fund-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundDetailComponent } from './fund-detail/fund-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [FundComponent, FundListComponent, FundAddComponent, FundDetailComponent, UserDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
  ],
  providers: [FundService]
})
export class FundModule { }
