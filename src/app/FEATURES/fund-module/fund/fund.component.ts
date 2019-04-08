import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from '../fund.model';


@Component({
  selector: 'fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  fund:Fund;

  constructor(
    private route: ActivatedRoute, 
    private srv: FundService) {}

  ngOnInit() {
      this.fund = this.route.snapshot.data["fund"];
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit : FundComponent');
}


}
