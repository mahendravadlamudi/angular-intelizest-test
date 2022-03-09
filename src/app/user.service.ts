import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = [];
  currentuser: any;
  constructor() {}
  addUser(user: any) {
    this.users.push(user);
    this.storeData('users', this.users, true);
  }
  storeData(name: string, data: any, parse: boolean) {
    if (parse) {
      data = JSON.stringify(data);
    }
    sessionStorage.setItem(name, data ? btoa(data) : data);
  }

  retriveData(name: string, parse: boolean): any {
    let data = sessionStorage.getItem(name);
    if (!data) {
      return null;
    }
    data = data ? atob(data) : data;
    if (parse) {
      data = JSON.parse(data);
    }
    return data;
  }
}
