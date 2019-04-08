import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund.model';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {

  funds : Fund[] =[
    {abbr: 'abbr11', num : '11000011'},{abbr: 'abbr13', num : '11000013'}, {abbr: 'abbr12', num : '11000012'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
