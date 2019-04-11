import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetail } from '../MODEL/User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthResponse } from '../auth/auth.model';

export const UNKNOWN_USER : UserDetail = {username : 'unknown'}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //own observable
  private subject = new BehaviorSubject(UNKNOWN_USER);//its private ***
  user$: Observable<UserDetail> = this.subject.asObservable();

  authResp :AuthResponse;

 
  constructor(private router:Router, private http : HttpClient) { }

  //Fake Login
  authorize(initial : string, password : string){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };

    const url1 = 'https://tact-nodejs.herokuapp.com/tact2/login' ;
    const url2 = 'http://localhost:5000/tact2/login' ;
     this.http.post(url2,{initial,password} ,httpOptions).subscribe(
      (data: AuthResponse) => {
        this.authResp = data;
        this.subject.next({username : data.initial});
        this.router.navigate(["home"]);
      },
      (err) => {
        alert('login failed');
      }
    )
  }

  logout(){
    this.authResp = null; //clean up jwt 
    this.subject.next(UNKNOWN_USER);
    this.router.navigate(["login"]);
  }
}
