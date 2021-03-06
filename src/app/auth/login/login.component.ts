import { Component, OnInit, ViewEncapsulation, HostBinding, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, NgModel, NgModelGroup, FormControl, FormArray} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { routingAminTriggerEnterLeft } from 'src/app/common/tact.anim-1';
import { promise } from 'protractor';


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

    //RF --> set defualtt  and validator (sync, asyn)
    this.loginReactiveForm = new FormGroup({
    'credentials' : new FormGroup(
        {
        'username' : new FormControl("INYLBD4", [Validators.required, Validators.minLength(6),this.customValidator1.bind(this)]), //custom validator
        'password' : new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)], this.customValidator2.bind(this))
        }
      ),
      
      'location' : new FormControl("IRV", Validators.required),
      'more-feilds' : new FormArray([]) //Form Array - initially blank
    });
    console.log(this.loginReactiveForm);
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
//1.create own form - formGroup > register controls
//2. validation + custom validator
//3. nested formGroup
//4. Useful - observable
//5. FormArray

loginReactiveForm : FormGroup;

loginRF() {
  this.inProgress = true;
  //this.authSrv.authorize(this.loginReactiveForm.credentials.value.username, this.loginReactiveForm.value.password);
  //this.authSrv.authorize(this.loginReactiveForm.value.username, this.loginReactiveForm.value.password);
  this.authSrv.authorize(this.loginReactiveForm.get('credentials.username').value,this.loginReactiveForm.get('credentials.password').value);
}

setdefaultRF(){this.loginReactiveForm.setValue({
  'credentials':{'username' : "INYLBD", 'password' : '123456'}
  ,'location': 'IRV'
  ,'more-feilds' : {undefined} //need to fix it
})} 

patchRF() {this.loginReactiveForm.patchValue({
  'location': 'IRV'
})} 

addMoreFeilds(){
  let control = new FormControl(null, Validators.required);
  (<FormArray>this.loginReactiveForm.get('more-feilds')).push(control);
}

//Sync
customValidator1(control : FormControl) : any{
  if (control.value === 'INYTEST') {
    return {'customValidatorKey' : true}; 
  }
  return null;
}

//Async
customValidator2(control : FormControl) : Promise<any> {

  const p = new Promise<any>((resolve, reject) => {
    setTimeout(()=> {
      console.log('validating... password : ', control.value)
      if (control.value == '1234567') {
        resolve( {'asynCustomValidator' : true});
      }
      else resolve(null);
    }, 3000);
    
  })

  return p;
}

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
