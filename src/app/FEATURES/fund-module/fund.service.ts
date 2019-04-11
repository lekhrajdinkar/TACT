import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund.model';
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { map, tap, catchError } from 'rxjs/operators';

//============================
// Play with HttpClient Here
//============================
@Injectable()
export class FundService{

  host = 'https://tact-nodejs.herokuapp.com' ;
  //host = 'http://localhost:5000' ;

  constructor(private http:HttpClient, private authSrv : AuthService) { }

  //1. Get full response
  getAllFunds(pageNumber?: number) : Observable<HttpResponse<Fund[]>>
  {
   return this.http.get<Fund[]>(
    `${this.host}/tact2/get-all-funds?pageNumber=${pageNumber}`
      ,{
        observe: 'response', 
        responseType:'json',
        headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization' : 'Bearer '+this.getToken() })
       }
    ).pipe(
      tap((r)=> {console.log(r)}),
      //tap((r)=> {return r.body ;}),
    );
    
  }

  //Get body as reponse
  getAllFunds1(pageNumber?: number) : Observable<Fund[]>
  {
    return this.http.get<Fund[]>(
      `${this.host}/tact2/get-all-funds?pageNumber=${pageNumber}`
      ,{
        observe: 'body', 
        //params: new HttpParams().set(),
        headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization' : 'Bearer '+this.getToken() })
       }
    ).pipe(
      tap((r)=> {console.log(r)}),
      //tap((r)=> {return r.body ;}),
    );
    
  }

  //
//   getAllFunds3_play(pageNumber?: number) : Observable<ArrayBuffer>
//   {
//     return this.http.get<String>(
//       `this.url/tact2/get-all-funds?pageNumber=${pageNumber}`
//       ,{
//         observe: 'response', 
//         responseType : 'arraybuffer',
//         headers: new HttpHeaders({
//               'Content-Type':  'application/json',
//               'Authorization' : 'Bearer '+this.getToken() })
//        }
//     ).pipe(
//       tap((r)=> {console.log(r)}),
//       //tap((r)=> {return r.body ;}),
//     ).subscribe(
//       (r) => {},
//       (err) => {}
// );
// }
//case 1 - arra
  


    addFund(fund: Fund){
      return this.http.post(
        `${this.host}/tact2/add-fund`
        ,fund 
        ,{
          observe: 'response', 
          headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization' : 'Bearer '+this.getToken() })
         }
         );
    }

    getToken(){
      let token = '';
      if(this.authSrv.authResp){
       token = this.authSrv.authResp.jwt ;}
      
       return token;
    }

}
