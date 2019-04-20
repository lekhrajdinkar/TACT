import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() message: String;
  @Input() bgColor: String = 'aqua';
  @Input() color: String = 'black';
  @Input('width') borderWidth: String = '1px';


  constructor() { }

  ngOnInit() {
    console.log(this.message);
  }

  getBgColor(){
    //console.log(this.bgColor);
    
    return {
      "background-color": this.bgColor
    };
  }

  getborder(){
    return{
      "border-color" : this.color ,
      "border-width": this.borderWidth
    }
  }

}
