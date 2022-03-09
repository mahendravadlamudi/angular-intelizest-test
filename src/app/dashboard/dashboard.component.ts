import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.userService.currentuser = null;
    this.userService.storeData('currentuser', null, false);
    this.router.navigate(['/login']);
  }
}
