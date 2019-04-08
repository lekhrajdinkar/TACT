import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../fund.model';


@Component({
  selector: 'fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  @Input('fund') fund:Fund;

  constructor() {}

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('ngAfterViewInit : FundComponent');
}


}
