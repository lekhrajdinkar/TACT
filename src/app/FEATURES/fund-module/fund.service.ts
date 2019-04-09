import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund.model';

@Injectable()
export class FundService{

  constructor(private http:HttpClient) { }

  getAllFunds(){
    return this.http.get<Fund[]>('https://tact-nodejs.herokuapp.com/tact2/get-all-funds');
    //return this.http.get('localhost:5000/tact2/get-all-funds');
    }

    addFund(fund: Fund){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      return this.http.post('https://tact-nodejs.herokuapp.com/tact2/add-fund',fund ,httpOptions);
    }

}
