import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit, ContentChild, AfterViewInit, ContentChildren, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { ProgressBarComponent } from 'src/app/common/custom-comp/progress-bar/progress-bar.component';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() user : User;
  @Input() index: number;

  @Input('ngtemplateU3') ngtu3 : TemplateRef<any>; //ng template usage 3.l > passed to html.

  @ViewChild('icon2', {read:ElementRef} ) icon2 : ElementRef; // from current comp
  @ViewChildren('ProgressBarComponent', {read:ElementRef} ) all_icons ; // getAll icons from CP - icon 1 and 3

  //CP:
  //@ContentChild('icon1', {read:Component}) icon1 : Component; //from parent - content project
  @ContentChild('icon1', {read:ElementRef}) icon1 : ElementRef; //from parent - content project
  @ContentChildren('app-progress-bar') all_icons_CP :  QueryList<ProgressBarComponent>; // getAll icons - icon 2 and 4

  constructor() { 
    //console.log('constructor icon1 ER : ',this.icon1); // undefined
    //console.log('constructor icon2 ER : ',this.icon2); // undefined
  }

  ngOnInit() {
    console.log('ng template U3 : ',this.ngtu3)
    //console.log(' ngOnInit icon1 ER : ',this.icon1); // ok ?
    //console.log(' ngOnInit icon2 ER : ',this.icon2); // ok ?
  }

  ngAfterViewInit(): void {
   //console.log(' ngAfterViewInit icon2 ER : ',this.icon2); //ok 
   console.log(' ngAfterViewInit all_icons ER : ',this.all_icons); 
  }

  //CP
  ngAfterContentInit(): void {
   //console.log(' ngAfterContentInit icon1 ER : ',this.icon1); //ok 
   console.log(' ngAfterContentInit all_icons_CP ER : ',this.all_icons_CP); 
  }

  
  

}
