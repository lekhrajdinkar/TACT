import { Component, OnInit, Renderer2, Output } from '@angular/core';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { click_trigger , div_trigger, highlightPageNum, compBump} from 'src/app/common/tact.anim-1';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css'],
  animations : [click_trigger, div_trigger, highlightPageNum, compBump]
})
export class FundListComponent implements OnInit {

  funds: Fund[];
  pageArray : number[];
  currentPage: number = 1;
  pageSize: number = 6;
  totalPage : number = 5; //will fix it
  //@Output() addFundCompClicked = false;
  

  constructor(
    private route: ActivatedRoute, 
    private srv: FundService,
    private renderer : Renderer2) { 

      this.pageArray = Array(this.totalPage).fill(0).map((x,i)=>i+1);
    }

    doubleClickFund( element){this.renderer.setStyle(element, 'background-color','rgb(222, 231, 210)') ; }

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

  //=====Animation
clickInfo = 'default' ; 
onSimpleClick()
{
  this.clickInfo = 'clicked';
  setTimeout(() => {this.clickInfo = 'default';},2000)
}

changePage(e){
  this.currentPage = e.target.value;
  console.log('current page : ' + e.target.value) ;
}
}



 