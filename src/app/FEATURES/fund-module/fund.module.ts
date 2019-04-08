import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundComponent } from './fund/fund.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FundComponent, FundListComponent],
  imports: [
    CommonModule,MaterialModule,RouterModule
  ]
})
export class FundModule { }
