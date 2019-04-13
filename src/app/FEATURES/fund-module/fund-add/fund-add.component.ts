import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';
import { routingAminTriggerFadeOut } from 'src/app/common/tact.anim-1';

@Component({
  selector: 'fund-add',
  templateUrl: './fund-add.component.html',
  styleUrls: ['./fund-add.component.css'],
  animations: [routingAminTriggerFadeOut]
})
export class FundAddComponent implements OnInit {

  @HostBinding('@routingAminTriggerFadeOut') routingAminTriggerFadeOut = true;

  constructor(
    private route: ActivatedRoute, 
    private srv: FundService) { }

  ngOnInit() {  }

  addFund(abbr: String, num:String){

    this.srv.addFund({abbr,num})
    .subscribe(
      (data) => {console.log(data);alert('Fund Added Successfully..');},
      (err) => {console.log(err);alert("Error Occured. Check console logs");}
    );

  }

}
