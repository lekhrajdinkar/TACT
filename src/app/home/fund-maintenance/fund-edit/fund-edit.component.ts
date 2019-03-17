import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fund-edit',
  templateUrl: './fund-edit.component.html',
  styleUrls: ['./fund-edit.component.css']
})
export class FundEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fundFeilds: string[] = ['fundNumber', 'acctNumber',  'class', 'symbol'  ];
  //fundFeilds: string[] = ['dstFundCode', 'dstAcctNumber' ,'category', 'submittedBy' ];
  //fundFeilds: string[] = ['submittedOn', 'approvedBy', 'approvedOn' ];

}
