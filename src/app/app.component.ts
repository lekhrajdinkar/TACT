import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UNKNOWN_USER } from './SERVICE/auth-service.service';
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'TACT';

  isLoggedIn$ : Observable<boolean> ;

  constructor(private authSrv : AuthService, private router : Router){

  }

  ngOnInit(): void {
    //transform one Obs to another.
   this.isLoggedIn$ = this.authSrv.user$.pipe(
     map (user => {console.log(user); return user !==  UNKNOWN_USER; })
     ); 
  }

  logout(){
    this.authSrv.logout();
  }


}
