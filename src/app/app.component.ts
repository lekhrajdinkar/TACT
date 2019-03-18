import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UNKNOWN_USER } from './SERVICE/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'TACT';

  isLooggedIn$ : Observable<boolean> ;

  constructor(private authSrv : AuthService){

  }

  ngOnInit(): void {
   // this.isLooggedIn$ = 
    this.authSrv.user$.pipe(); 
  }

}
