import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { compBumpNoState } from 'src/app/common/tact.anim-1';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations : [compBumpNoState]
})
export class UserDetailComponent implements OnInit {

  index = 0;

  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {this.index = params['index'];}
    )
  }

}
