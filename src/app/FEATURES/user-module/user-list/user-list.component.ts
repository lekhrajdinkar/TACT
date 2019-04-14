import { Component, OnInit } from '@angular/core';
import { usersData } from './user-list-item/uses.data';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = usersData;
  constructor() { }

  ngOnInit() {
  }

}
