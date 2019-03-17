import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { FundMaintainance, ELEMENT_DATA } from 'src/app/MODEL/FundMaintainance';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'fund-maintenance',
  templateUrl: './fund-maintenance.component.html',
  styleUrls: ['./fund-maintenance.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class FundMaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['fundNumber', 'acctNumber',  'class', 'symbol', 'dstFundCode', 'dstAcctNumber' ,'category', 'submittedBy', 'submittedOn', 'approvedBy', 'approvedOn' ];
  dataSource = new MatTableDataSource<FundMaintainance>(ELEMENT_DATA);
  selection = new SelectionModel<FundMaintainance>(true, []);

}
