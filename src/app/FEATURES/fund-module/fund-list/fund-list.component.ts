import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {

  funds: Fund[];

  constructor(
    private route: ActivatedRoute, 
    private srv: FundService) { }

  ngOnInit() {
    const funds$ = this.srv.getAllFunds().subscribe((data) => {
      //console.log(data);
      this.funds = data;
    },
    (err) => {
      console.log(err);
    }
    );
    console.log(funds$);
  }

}

// [
//   {abbr: 'abbr11', num : '11000011'},
//   {abbr: 'abbr13', num : '11000013'}, 
//   {abbr: 'abbr12', num : '11000012'}
// ]
