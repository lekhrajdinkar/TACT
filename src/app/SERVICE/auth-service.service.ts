import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, noop } from 'rxjs';
import { UserDetail } from '../MODEL/User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthResponse } from '../auth/auth.model';
import { pipe } from '@angular/core/src/render3';
import { TactState } from '../reducers';
import { Store } from '@ngrx/store';
import { LoginAction } from '../auth/auth.actions';

export const UNKNOWN_USER : UserDetail = {username : 'unknown'}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //own observable
  private subject = new BehaviorSubject(UNKNOWN_USER);//its private ***
  user$: Observable<UserDetail> = this.subject.asObservable();

  authResp :AuthResponse;

  host = 'https://tact-nodejs.herokuapp.com' ;
  //host = 'http://localhost:5000' ;
 
  constructor(
    private router:Router, 
    private http : HttpClient,
    private store : Store<TactState>) { }

  //Fake Login
  authorize(initial : string, password : string){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };

    const url= `${this.host}/tact2/login` ;
   
     this.http.post(url,{initial,password} ,httpOptions)
     .pipe(
       tap((data: AuthResponse) => 
       {
        //1.1. store Login info in service
        this.authResp = data;
        this.subject.next({username : data.initial});

         //1.2. store Login info in Store ngRx
         this.authResp = data;
         this.store.dispatch(new LoginAction(data));

        //2. navigate to Home
        this.router.navigate(["home"]);
      }),
  
     )
     .subscribe(
      noop,
      (err) => {
        alert('login failed. Check error Logs');
      }
    )
  }

  logout(){
    this.authResp = null; //clean up jwt 
    this.subject.next(UNKNOWN_USER);
    this.router.navigate(["login"]);
  }

  //Auth Gaurd
  isToken(){ if(this.authResp) return  true; else return false;}

  isAuthorized(){
    if (this.isToken()){
       this.http.get(
        `${this.host}/tact2/auth-status`

        ,{
          observe: 'response', 
          headers: new HttpHeaders({
                'Authorization' : 'Bearer '+this.authResp.jwt })
         }
         )
         .subscribe(
           (data )=> { console.log(" auth gauad : AUTHORIZED ");return true}, // return promise<boolean>
           (err)=> { console.log(" auth gauad : NOT AUTHORIZED "); return false}
          );
    }
    else {
      console.error ('JWT token is not valid or not been Set. please login first');
      return false; //return boolean}
    }

  }
 
}
