import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund.model';

@Injectable()
export class FundService{

  constructor(private http:HttpClient) { }

  getAllFunds(){
    return this.http.get<Fund[]>('https://tact-nodejs.herokuapp.com/tact2/get-all-funds');
    //return this.http.get('localhost:5000/tact2/get-all-funds');
    }

}
