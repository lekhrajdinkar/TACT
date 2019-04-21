import { Component, OnInit } from '@angular/core';
import { Observable, noop } from 'rxjs';
import { AuthService, UNKNOWN_USER } from './SERVICE/auth-service.service';
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TactState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'TACT';

  isLoggedIn$ : Observable<boolean> ;

  constructor(private authSrv : AuthService, private router : Router ,
    private store : Store<TactState>){

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
       map(state => state.authState.isLoggedIn) 
      )
     //.subscribe(noop);
  }

  logout(){
    this.authSrv.logout();
  }


}
