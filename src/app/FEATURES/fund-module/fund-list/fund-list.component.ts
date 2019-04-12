import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {

  funds: Fund[];
  currentPage: number = 1;
  pageSize: number = 6;
  totalPage : number = 10; //will fix it
  

  constructor(
    private route: ActivatedRoute, 
    private srv: FundService) { }

  ngOnInit() {
    console.log('FundListComponent - init')
    //1. Get Full response
     this.srv.getAllFunds(1, this.pageSize)
    .subscribe(
      (data) => { setTimeout( ()=> {this.funds = data.body; console.log('HTTP Response body: ',data.body) ;},1000)},
      (err) => {console.log(err);}
    );
    
    //this.srv.getAllFunds3_play();
    //this.srv.parallelRequests();
  }


  previous(pageSize : String) {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    }
    if(pageSize){
      this.pageSize = +pageSize;
    }
    this.srv.getAllFunds1(this.currentPage, this.pageSize).subscribe(
      (data) => {this.funds = data; console.log('HTTP Response body: ',data) ;},
      (err) => {console.log(err);}
    );
  }

  next(pageSize : String) {
    if (this.currentPage < this.totalPage) {
      this.currentPage = this.currentPage + 1;
    }
    if(pageSize){
      this.pageSize = +pageSize;
    }
    this.srv.getAllFunds1(this.currentPage, this.pageSize).subscribe(
      (data) => {this.funds = data;},
      (err) => {console.log(err);}
    );
  }
}
