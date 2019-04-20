import { Component, OnInit, ViewEncapsulation, HostBinding, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, NgModel, NgModelGroup} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { routingAminTriggerEnterLeft } from 'src/app/common/tact.anim-1';


@Component({
  selector: 'login',
  templateUrl: './login.RF.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routingAminTriggerEnterLeft]
})
export class LoginComponent implements OnInit {

// ======= TD ==============
  //view form before submit
  @ViewChild('loginForm') loginForm : NgForm;
  @ViewChild('lgroup') loginGroup : NgModelGroup;

  @HostBinding('@routingAminTriggerEnterLeft') routingAminTriggerEnterLeft = true;

  locations = ['IRV', 'HRO'];
  
  inProgress = false;

  constructor(private router:Router, private authSrv : AuthService) {}

  ngOnInit() {
    console.log(this.loginForm);
  }

  loginTD() {
    this.inProgress = true;
    console.log(this.loginGroup);
    //this.authSrv.authorize(this.loginForm.value.username, this.loginForm.value.password);
    this.authSrv.authorize(this.loginGroup.value.username, this.loginGroup.value.password);
  }

  setdefaultTD(){
    //setting default values to form
    this.loginForm.setValue({
      lgroup :{
        username : "INYLBD", password : '123456', location: 'IRV'
      }
    })
  }

  patchTD(){
    //setting default values to form
    this.loginForm.form.patchValue({
      lgroup :{
        username : "INYLBD", location: 'IRV'
      }
    })
  }


// ========= RF ========
//1.create own form - formGroup
//2. validation + custom validator
//3. nested formGroup
//4. Useful - observable

loginRF() {
  this.inProgress = true;
  console.log(this.loginGroup);
  //this.authSrv.authorize(this.loginForm.value.username, this.loginForm.value.password);
  this.authSrv.authorize(this.loginGroup.value.username, this.loginGroup.value.password);
}

setdefaultRF(){this.setdefaultTD()} //same as TD
patchRF() {this.patchTD()} //same as TD


//===============================
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
