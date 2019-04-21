import { Component, OnInit } from '@angular/core';
import { Observable, noop } from 'rxjs';
import { AuthService, UNKNOWN_USER } from './SERVICE/auth-service.service';
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TactState } from './reducers';
import { MatDialog } from '@angular/material';
import { AboutComponent } from './common/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TACT';

  isLoggedIn$: Observable<boolean>;
  dialogRef;

  constructor(private authSrv: AuthService, private router: Router,
    private store: Store<TactState>,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //transform one Obs to another.

    //A. service approach
    //  this.isLoggedIn$ = this.authSrv.user$.pipe(
    //    map (user => {console.log(user); return user !==  UNKNOWN_USER; })
    //    ); 

    //B. store approach
    this.isLoggedIn$ = this.store
      .pipe(
        map(state => {
          //even if userState is updated, authState will be subscribed again.. :( --> use selector rather than subscribing store
          console.log('Store Subcription ran ')
          return state.authState.isLoggedIn;
        })
      )
    //.subscribe(noop);
  }

  logout() {
    this.authSrv.logout();
  }

  about() {
    console.log('The dialog is opened');
    // this.dialogRef = this.dialog.open(AboutComponent, {
    //   data: { version: '6.0.0' }
    //   , height: '400px'
    //   , width: '600px'
    // });
    // this.dialog.afterAllClosed.subscribe(result => console.log('diallog data after close : ', result))

    const dialogRef = this.dialog.open(AboutComponent, {
      width: '400px',
      data: { version: '6.0.0' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }



}
