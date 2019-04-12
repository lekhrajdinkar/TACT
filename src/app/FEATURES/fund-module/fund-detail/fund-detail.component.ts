import { Component, OnInit } from '@angular/core';
import { UnderlyingFund } from '../underlyingFund.model';
import { FundService } from '../fund.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.css']
})
export class FundDetailComponent implements OnInit {

  underlyingFunds : UnderlyingFund[];
  constructor(private fundSrv : FundService, private route : ActivatedRoute) { }

  ngOnInit() {
     //1. Get Full response
     this.fundSrv.getUunderLyingFunds( this.route.snapshot.data['_id'] )
    .subscribe(
      (data) => { 
         setTimeout( ()=> {this.underlyingFunds = data;
         console.log('HTTP Response body: ',data) ;},1000)},
      (err) => {console.log(err);}
    );
  }

}
