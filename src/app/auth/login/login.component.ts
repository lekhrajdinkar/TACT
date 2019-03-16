import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder, private router:Router) {

      this.form = fb.group({
          email: ['tact_data_entry', [Validators.required]],
          password: ['tact_data_entry', [Validators.required]]
      });

  }

  ngOnInit() {}

  login() {
    console.log("login...") 
    const val = this.form.value;
    this.router.navigate(["welcome"]);
  }

  clear(){
    console.log("clear feilds...")
  }


}
