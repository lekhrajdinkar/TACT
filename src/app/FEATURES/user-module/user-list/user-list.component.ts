import { Component, OnInit, Input } from '@angular/core';
import { compBump, compBumpNoState } from 'src/app/common/tact.anim-1';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations:[compBump, compBumpNoState]
})
export class UserListComponent implements OnInit {

  @Input() users : User[];
  selectedItemIndex ;

  constructor() { }

  ngOnInit() {}

  loadDetail(index){
    this.selectedItemIndex = index;
    console.log("loading details")
  }

}
