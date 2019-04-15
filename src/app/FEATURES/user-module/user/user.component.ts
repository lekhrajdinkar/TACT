import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TactState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersHC : User[]; 
  
  //not used yet
  usersHC_dev : User[]; usersHC_bsa : User[];
  users$ :  Observable<HttpResponse<User[]>>;
  users : User[];

  constructor( private userSrv : UserService, private store : Store<TactState>) { }

  ngOnInit() {
    this.usersHC = this.userSrv.getAllHardcodedUser();
    
    this.users$ = this.userSrv.getAllUser(); //http get observble

    //Subcribe whole state
    this.store.pipe(
      tap(state => {console.log('complete State : TactState ==> ',state)}),
      map( (state:any) => state.userState.users)
    )
    .subscribe(users => {
      console.log('only UserState ==> ', users)
      
      //If data not present in state then only make REST
      if (users == undefined){
        this.users$.subscribe(
          (data: any) => {this.users = data.body ; console.log('got from REST')}
        );
      }else{
        console.log('got from Store')
        this.users = users;
      }
    })

  }

}
