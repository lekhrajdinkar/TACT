import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { routingAminTriggerEnterLeft } from 'src/app/common/tact.anim-1';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routingAminTriggerEnterLeft]
})
export class LoginComponent implements OnInit {

  @HostBinding('@routingAminTriggerEnterLeft') routingAminTriggerEnterLeft = true;
  form: FormGroup;
  inProgress = false;
  constructor(
      private fb:FormBuilder, private router:Router, private authSrv : AuthService) {

      this.form = fb.group({
          email: ['tact_data_entry', [Validators.required]],
          password: ['tact_data_entry', [Validators.required]]
      });

  }

  ngOnInit() {}


  login(u,p) {
    this.inProgress = true;
    this.authSrv.authorize(u,p);
  }

  clear(){
    console.log("clear feilds...")
  }


}
