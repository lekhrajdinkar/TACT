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
  totalPage : number = 10; //will fix it
  

  constructor(
    private route: ActivatedRoute, 
    private srv: FundService) { }

  ngOnInit() {
    //1. Get Full response
     this.srv.getAllFunds(1)
    .subscribe(
      (data) => { this.funds = data.body; console.log('HTTP Response body: ',data.body) ;},
      (err) => {console.log(err);}
    );
    
    this.srv.getAllFunds3_play();
  }


  previous() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    }
    this.srv.getAllFunds1(this.currentPage).subscribe(
      (data) => {this.funds = data; console.log('HTTP Response body: ',data) ;},
      (err) => {console.log(err);}
    );
  }

  next() {
    if (this.currentPage < this.totalPage) {
      this.currentPage = this.currentPage + 1;
    }
    this.srv.getAllFunds1(this.currentPage).subscribe(
      (data) => {this.funds = data;},
      (err) => {console.log(err);}
    );
  }
}
