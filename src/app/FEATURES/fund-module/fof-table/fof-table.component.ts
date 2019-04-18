import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund.model';
import { FundService } from '../fund.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-fof-table',
  templateUrl: './fof-table.component.html',
  styleUrls: ['./fof-table.component.css']
})
export class FofTableComponent implements OnInit {

  fofs: Fund[];
  cols: any[];
  fundNumbers: {label : String, value : String}[] ; 
  created_bys: {label : String, value : String}[] ;

  data = {
    labels: ['Growth','Equity','Bond'],
    datasets: [{
            data: [20, 70, 10],
            backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
            hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
        }]    
    };


    constructor(private fundSrv: FundService) { }

    ngOnInit() {
        this.fundSrv.getAllFunds(1,100)
        .subscribe(
          (data)=> {
            this.fofs = data.body; 
            console.log(this.fofs);
            this.fundNumbers = this.fofs.map( fof => { return {label: fof.num, value: fof.num }}); //console.log(this.fundNumbers);
            this.created_bys = this.fofs.map(fof =>  { return {label: fof.created_by, value: fof.created_by}} ); //console.log(this.created_bys);

            //this.getTreeNode();
            }
        );

        this.cols = [
            { field: '_id', header: 'id' },
            { field: 'abbr', header: 'Abbreviation' },
            { field: 'num', header: 'Fund Number' },
            { field: 'created_by', header: 'created by' },
            { field: 'created_dt', header: 'created on' }
        ];
    }

    getCardClass(isOdd: boolean, isFirst : boolean){
        console.log('called', isFirst,  isOdd );
        return {
            'is-odd' : isOdd,
            'fund-card' : true,
            'is-first' : isFirst
        }
    }


    
  
}
