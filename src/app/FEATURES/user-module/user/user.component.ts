import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersHC : User[];

  constructor( private userSrv : UserService) { }

  ngOnInit() {
    this.usersHC = this.userSrv.getAllHardcodedUser();
  }

}
