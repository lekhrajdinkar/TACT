import { Component, OnInit } from '@angular/core';
import { UnderlyingFund } from '../underlyingFund.model';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.css']
})
export class FundDetailComponent implements OnInit {

  underlyingFunds : UnderlyingFund[];
  constructor() { }

  ngOnInit() {
  }

}
