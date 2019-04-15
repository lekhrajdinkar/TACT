import { Component, OnInit, Input } from '@angular/core';
import { compBump, compBumpNoState } from 'src/app/common/tact.anim-1';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { noop } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations:[compBump, compBumpNoState]
})
export class UserListComponent implements OnInit {

  @Input() users : User[];
  selectedItemIndex ;

  constructor(private router : Router, private userSrv : UserService) { }

  ngOnInit() {}

  loadDetail(index){
    this.selectedItemIndex = index;
    console.log("loading details");
    this.router.navigate(['user-module/get-detail/', index],{}); //absolute path, will fix it
  }

  addUser(){
    console.log("adding user");
    this.router.navigate(['user-module/add-user'],{});
  }

  refresh(){
    this.userSrv.getAllUser().subscribe(noop);
  }

}
