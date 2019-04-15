//Step 1: Write Action
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadAllUsers = '[LoadAll] User Action',
  DeleteUser = '[Delete] User Action',
}

export class LoadAllUserAction implements Action 
{
  constructor(private users) {this.payload = users;}
  readonly type = UserActionTypes.LoadAllUsers;
  payload : {users : User[]}
}

export class DeleteUserUsers implements Action 
{
  readonly type = UserActionTypes.DeleteUser;
  payload: {user : User}
}


export type UserActions = LoadAllUserAction | DeleteUserUsers;
