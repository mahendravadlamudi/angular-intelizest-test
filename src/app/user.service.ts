import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [];
  currentuser: any;
  constructor() {}
  addUser(user: any) {
    this.users.push(user);
  }
  storeData(name: string, data: any, parse: boolean) {
    if (parse) {
      data = JSON.stringify(data);
    }
    sessionStorage.setItem(name, btoa(data));
  }

  retriveData(name: string, parse: boolean): any {
    let data = sessionStorage.getItem(name);
    if (!data) {
      return null;
    }
    data = atob(data);
    if (parse) {
      data = JSON.parse(data);
    }
    return data;
  }
}