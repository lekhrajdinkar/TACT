import { Injectable } from '@angular/core';
import { usersData } from './user-list/user-list-item/uses.data';

@Injectable()
export class UserService {

  constructor() { }

  getAllHardcodedUser(){
    return usersData;
  }
}
