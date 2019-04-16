import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-fof-table',
  templateUrl: './fof-table.component.html',
  styleUrls: ['./fof-table.component.css']
})
export class FofTableComponent implements OnInit {

  fofs: Fund[];
  cols: any[];

    constructor(private fundSrv: FundService) { }

    ngOnInit() {
        this.fundSrv.getAllFunds(1,100)
        .subscribe(
          (data)=> {this.fofs = data.body; console.log(this.fofs)}
        );

        this.cols = [
            { field: '_id', header: 'id' },
            { field: 'abbr', header: 'Abbreviation' },
            { field: 'num', header: 'Fund Number' },
            { field: 'created_by', header: 'created by' },
            { field: 'created_dt', header: 'created on' }
        ];
    }

}
