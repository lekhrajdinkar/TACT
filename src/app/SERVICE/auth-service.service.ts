import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetail } from '../MODEL/User';
import { Router } from '@angular/router';

export const UNKNOWN_USER : UserDetail = {username : 'unknown'}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //own observable
  private subject = new BehaviorSubject(UNKNOWN_USER);
  user$: Observable<UserDetail> = this.subject.asObservable();

  constructor(private router:Router) { }

  //Fake Login
  authorize(username : string){
    if(true){
      this.subject.next({username});
      this.router.navigate(["welcome"]);
    }else{
      alert('login failed');
    }
    
  }

  logout(){
    this.subject.next(UNKNOWN_USER);
    this.router.navigate(["login"]);
  }
}
