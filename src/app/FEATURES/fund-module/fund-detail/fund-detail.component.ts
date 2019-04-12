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

  fof_num : String;
  underlyingFunds : UnderlyingFund[];
  noUFflag = false;
  constructor(private fundSrv : FundService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.fof_num = this.route.snapshot.queryParams['fof_num']
     //1. Get Full response
     this.fundSrv.getUunderLyingFunds( this.route.snapshot.params['_id'] )
    .subscribe(
      (data) => { 
         setTimeout( ()=> {
           this.underlyingFunds = data;
           if(data.length == 0){ this.noUFflag = true;}
          console.log('HTTP Response body: ',data) ;},1000)},
      (err) => {console.log(err);}
    );
  }

}
