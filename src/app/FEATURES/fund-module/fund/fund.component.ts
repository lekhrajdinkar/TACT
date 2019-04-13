import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../fund.model';
import { click_trigger, div_trigger } from 'src/app/common/tact.anim-1';


@Component({
  selector: 'fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css'],
  animations : [click_trigger, div_trigger]
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

clickInfo = 'default' ; 
onSimpleClick()
{
  this.clickInfo = 'clicked';
  setTimeout(() => {this.clickInfo = 'default';},1000)
}
}
