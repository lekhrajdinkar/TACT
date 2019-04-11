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
import { FundModuleRouting } from './fund.module.routing';
import { TactCommonModule } from 'src/app/common/common.module';


@NgModule({
  declarations: [FundComponent, FundListComponent, FundAddComponent, FundDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    FundModuleRouting,
    TactCommonModule
    
  ],
  providers: [FundService]
})
export class FundModule { }
