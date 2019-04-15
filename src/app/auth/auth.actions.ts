import { Action } from '@ngrx/store';
import { AuthResponse } from './auth.model';

//constants
export enum AuthActionTypes {
  Login = '[Login] Action',
  Logout = '[Logout] Action',
}

//Actions
//1. Login Action class
export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;
  constructor( private payload : AuthResponse ){}
}

//2. Login Action class
export class LogoutAction implements Action {
  readonly type = AuthActionTypes.Logout;
  //constructor( private payload : AuthResponse ){}
}


export type AuthActions = LoginAction | LogoutAction;
//----------------------------------

// //2. state
// export type AuthState = {
//   isLoggedIn: boolean;
//   currentUser: string;
//   jwt : string;
// }

// //3. Reducer - updates state when action is dispatch with payload

// const initialState = { isLoggedIn: false, currentUser: undefined, jwt : undefined}

// export function authReducer(state :AuthState = initialState, action) : AuthState {
//   switch(action.type){

//     case AuthActionTypes.Login : return { isLoggedIn : true, currentUser : action.payload.initial, jwt : action.payload.jwt} ;

//     case AuthActionTypes.Logout : return { isLoggedIn : false, currentUser : undefined, jwt : undefined} 

//     default : return state;
//   }

// }
