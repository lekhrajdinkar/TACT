import { Component, OnInit, ViewEncapsulation, HostBinding, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, NgModel} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { routingAminTriggerEnterLeft } from 'src/app/common/tact.anim-1';


@Component({
  selector: 'login',
  templateUrl: './login.TD.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routingAminTriggerEnterLeft]
})
export class LoginComponent implements OnInit {



  //view form before submit
  @ViewChild('loginForm') loginForm : NgForm;

  @HostBinding('@routingAminTriggerEnterLeft') routingAminTriggerEnterLeft = true;
  
  inProgress = false;

  constructor(private router:Router, private authSrv : AuthService) {}

  ngOnInit() {
    console.log(this.loginForm);
  }

  loginTD() {
    this.inProgress = true;
    this.authSrv.authorize(this.loginForm.value.username, this.loginForm.value.password);
  }

 //Template 1
//  login(u,p) {
//   this.inProgress = true;
//   this.authSrv.authorize(u,p);
// }

// //-------------------

//template 2
// loginModel : LoginModel = { username : 'lekhraj', password: 'lekh'};
// disable = true;
//  print(event){
//    console.log(event.target.value);
//    //this.xyz = event.target.value;
//  }

//  submit(f: any){ //ElementRef or NgForm
//    console.log(f);
//    this.disable = !f.valid ;
//  }

//  f3Input(f3: NgModel){
//    console.log(f3.valid, f3.value);
//  }

//  clear(){
//   console.log("clear feilds...")
// }

}
