import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../fund.model';


@Component({
  selector: 'fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  @Input('fund') fund:Fund;
  @Input() index;

  constructor() {
    
  }

  ngOnInit() { 
    this.index += 1;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit : FundComponent');
}


}
