import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund.model';
import { AuthService } from 'src/app/SERVICE/auth-service.service';

@Injectable()
export class FundService{

  constructor(private http:HttpClient, private authSrv : AuthService) { }

  getAllFunds(){
    return this.http.get<Fund[]>('https://tact-nodejs.herokuapp.com/tact2/get-all-funds');
    //return this.http.get('localhost:5000/tact2/get-all-funds');
    }

    addFund(fund: Fund){
      let token = '';
      if(this.authSrv.authResp){
       token = this.authSrv.authResp.jwt ;}

      console.log('token : ', token);

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization' : 'Bearer '+token
        })
      };

      return this.http.post('https://tact-nodejs.herokuapp.com/tact2/add-fund',fund ,httpOptions);
    }

}
