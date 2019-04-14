import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
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
