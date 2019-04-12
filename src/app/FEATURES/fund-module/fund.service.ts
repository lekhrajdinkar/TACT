import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Fund } from './fund.model';
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { map, tap, catchError, shareReplay } from 'rxjs/operators';
import { UnderlyingFund } from './underlyingFund.model';

//============================
// Play with HttpClient Here
//============================
@Injectable()
export class FundService{

  host = 'https://tact-nodejs.herokuapp.com' ;
  //host = 'http://localhost:5000' ;

  constructor(private http:HttpClient, private authSrv : AuthService) { }

  //1. Get full response
  getAllFunds(pageNumber: number, pageSize: number) : Observable<HttpResponse<Fund[]>>
  {
   return this.http.get<Fund[]>(
    `${this.host}/tact2/get-all-funds?pageNumber=${pageNumber}&pageSize=${pageSize}`
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

  //Get body as reponse
  getAllFunds1(pageNumber: number, pageSize: number) : Observable<Fund[]>
  {
    return this.http.get<Fund[]>(
      `${this.host}/tact2/get-all-funds?pageNumber=${pageNumber}&pageSize=${pageSize}`
      ,{
        observe: 'body', //default
        responseType : 'json', //default
        //reportProgress :  true,
        params: new HttpParams().set('Authorization' , 'Bearer '+this.getToken() ),
        headers: new HttpHeaders({'Content-Type':  'application/json'})
       }
    ).pipe(
      tap((r)=> {console.log(r)}),
      //tap((r)=> {return r.body ;}),
    );
    
  }


  getAllFunds3_play(pageNumber?: number)
  {
    //Another way of creating Http
    const req = new HttpRequest('GET', `${this.host}/tact2/get-latest-fund`, {reportProgress :  true});
    this.http.request(req).subscribe(
      (r) => {console.log('PLAY subscribe 2: ',r);},
      (err) => {console.error(err)}
    );

   this.http.get(
      `${this.host}/tact2/get-all-funds?pageNumber=${pageNumber}`
      ,{
        observe: 'body', //response, body, event
        responseType : 'blob', //arraybuffer, text,json, blob
        params: new HttpParams().set('Authorization' , 'Bearer '+this.getToken() ),
        reportProgress :  true
       }
    ).pipe(
      tap((r)=> {console.log('PLAY tap: ',r)}),
      catchError(this.handleError),
      shareReplay()
      //tap((r)=> {return r.body ;}),
    )
   .subscribe((r) => {console.log('PLAY subscribe: ',r);},(err) => {console.error(err)});
}

//parallel request
// parallelRequests() {

//   const parallel$ = Observable.forkJoin(
//       this.http.get(`${this.host}/tact2/get-latest-fund`),
//       this.http.get(`${this.host}/tact2/get-latest-fund`)
//   );

//   parallel$.subscribe(
//       values => {
//           console.log("all values", values)
//       }
//   );
// }
  



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

    //Get Token
    getToken(){
      let token = '';
      if(this.authSrv.authResp){
       token = this.authSrv.authResp.jwt ;}
      
       return token;
    }

    //Streamlined Error Handling - HttpClient
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };

    //Get Underlying Funds
    getUunderLyingFunds( _id : String){
      return this.http.get<UnderlyingFund[]>(
        `${this.host}/tact2/get-uf-by-fof/${_id}`
          ,{
            observe: 'body', 
            responseType:'json',
            //reportProgress :  true,
            headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization' : 'Bearer '+this.getToken() })
           }
        )
        .pipe(
          tap((r)=> {console.log(r)})
        )
    }

}
