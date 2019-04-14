import { Component, OnInit, HostBinding } from '@angular/core';
import { routingAminTriggerEnterLeft, routingAminTriggerFadeOut, routingAminTriggerGoUp } from 'src/app/common/tact.anim-1';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  animations: [routingAminTriggerEnterLeft, routingAminTriggerFadeOut, routingAminTriggerGoUp]
})
export class UserAddComponent implements OnInit {

  //@HostBinding('@routingAminTriggerEnterLeft')  routingAminTriggerEnterLeft = false;
  //@HostBinding('@routingAminTriggerFadeOut')  routingAminTriggerFadeOut = true;
  @HostBinding('@routingAminTriggerGoUp')  routingAminTriggerGoUp = true;
 
  constructor() { }

  ngOnInit() {
    console.log('UserAddComponent - init')
  }

}
