import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: any[];
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    console.log(this.userService.users);
    this.users = this.userService.users;
  }

  logout() {
    this.userService.currentuser = null;
    this.userService.storeData('currentuser', null, false);
    this.router.navigate(['/login']);
  }
}
