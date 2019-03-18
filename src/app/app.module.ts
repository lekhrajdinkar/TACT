import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';
import { HomeComponent } from './home/home/home.component';
import { FundEditComponent } from './home/fund-maintenance/fund-edit/fund-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundMaintenanceComponent,
    ReportComponent,
    HomeComponent,
    FundEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
