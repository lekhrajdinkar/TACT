import { Component, OnInit, ViewEncapsulation, HostBinding, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, NgModel} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { routingAminTriggerEnterLeft } from 'src/app/common/tact.anim-1';


@Component({
  selector: 'login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routingAminTriggerEnterLeft]
})
export class LoginComponent implements OnInit {

  loginModel : LoginModel = { username : 'lekhraj', password: 'lekh'};
  xyz;
  disable = true;

  //view form before submit
  @ViewChild('f') loginForm : NgForm;

  @HostBinding('@routingAminTriggerEnterLeft') routingAminTriggerEnterLeft = true;
  form: FormGroup;
  inProgress = false;
  constructor(
      //private fb:FormBuilder, 
      private router:Router, private authSrv : AuthService) {

      // this.form = fb.group({
      //     email: ['tact_data_entry', [Validators.required]],
      //     password: ['tact_data_entry', [Validators.required]]
      // });

  }

  ngOnInit() {
    console.log(this.loginForm);
  }


  login(u,p) {
    this.inProgress = true;
    this.authSrv.authorize(u,p);
  }

  clear(){
    console.log("clear feilds...")
  }

  //template 2
 print(event){
   console.log(event.target.value);
   this.xyz = event.target.value;
 }

 submit(f: any){ //ElementRef or NgForm
   console.log(f);
   this.disable = !f.valid ;
 }

 f3Input(f3: NgModel){
   console.log(f3.valid, f3.value);
 }

}
