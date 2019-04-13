import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { FundMaintainance, ELEMENT_DATA } from 'src/app/MODEL/FundMaintainance';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { routingAminTriggerGoUp } from 'src/app/common/tact.anim-1';

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
    routingAminTriggerGoUp,
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class FundMaintenanceComponent implements OnInit, AfterViewInit{

  @HostBinding('@routingAminTriggerGoUp') routingAminTriggerGoUp = true;

  @ViewChild("paginator1") paginator : MatPaginator ;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator ;
  }


  displayedColumns: string[] = ['fundNumber', 'acctNumber',  'class', 'symbol', 'dstFundCode', 'dstAcctNumber' ,'category', 'submittedBy', 'submittedOn', 'approvedBy', 'approvedOn' ];
  dataSource = new MatTableDataSource<FundMaintainance>(ELEMENT_DATA);
  selection = new SelectionModel<FundMaintainance>(true, []);

}
