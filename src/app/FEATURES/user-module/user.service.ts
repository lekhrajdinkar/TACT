import { Injectable } from '@angular/core';
import { usersData } from './user-list/user-list-item/uses.data';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { Observable } from 'rxjs';
import { Fund } from '../fund-module/fund.model';

@Injectable()
export class UserService {

  host = 'https://tact-nodejs.herokuapp.com' ;
  //host = 'http://localhost:5000' ;
  users : User []
  constructor( private http : HttpClient
    , private authSrv : AuthService) { }

  getAllHardcodedUser(){
    return usersData;
  }

  getAllUser() : Observable<HttpResponse<User[]>>{
    return this.http.get<User[]>(
      `${this.host}/tact2/get-all-user`
        ,{
          observe: 'response', 
          responseType:'json',
          //reportProgress :  true,
          headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization' : 'Bearer '+this.getToken() })
         }
      ).pipe(
        tap((r)=> {console.log(r)}),
        //tap((r)=> {return r.body ;}),
      );
  }

  addUser(name, role, initial, loc){
    return this.http.post(
      `${this.host}/tact2/add-user`
      ,{name, role , initial, loc} //User Model
      ,{
        observe: 'response', 
        headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization' : 'Bearer '+this.getToken() })
       }
       );
  }


  //Get Token
getToken(){
  let token = '';
  if(this.authSrv.authResp){
   token = this.authSrv.authResp.jwt ;}
  
   return token;
}
}


