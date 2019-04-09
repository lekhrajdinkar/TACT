import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';

@Component({
  selector: 'fund-add',
  templateUrl: './fund-add.component.html',
  styleUrls: ['./fund-add.component.css']
})
export class FundAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private srv: FundService) { }

  ngOnInit() {  }

  addFund(abbr: String, num:String){

    this.srv.addFund({abbr,num})
    .subscribe(
      (data) => {console.log(data);},
      (err) => {console.log(err);}
    );

  }

}
