import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule  } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundMaintenanceComponent } from './home/fund-maintenance/fund-maintenance.component';
import { ReportComponent } from './home/report/report.component';
import { HomeComponent } from './home/home/home.component';
import { FundEditComponent } from './home/fund-maintenance/fund-edit/fund-edit.component';
import { FundModule } from './FEATURES/fund-module/fund.module'; //eagerly loaded module
import { ErrorComponent } from './error/error.component';
import { TactCommonModule } from './common/common.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import * as fromAuth from './auth/auth.reducer';
import {   PrimeNGModule} from './ngprime.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AboutComponent } from './common/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundMaintenanceComponent,
    ReportComponent,
    HomeComponent,
    FundEditComponent,
    ErrorComponent, AboutComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,

    MaterialModule, PrimeNGModule,
    FundModule, //routing order matter, load it  FundModule(fund.routing.module) before AppRoutingModule ***
    AppRoutingModule,
    BrowserAnimationsModule,
    TactCommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature('authState', fromAuth.authReducer),

    AngularFireModule.initializeApp(
      {apiKey: "AIzaSyA1GExf8PlXdTrSLPlQqkX8xqxFXcesSew",
    authDomain: "tact-7534b.firebaseapp.com",
    databaseURL: "https://tact-7534b.firebaseio.com",
    projectId: "tact-7534b",
    storageBucket: "tact-7534b.appspot.com",
    messagingSenderId: "980217671333"}),
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent]
})
export class AppModule { }
