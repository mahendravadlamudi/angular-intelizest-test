import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userSerivce: UserService, private router: Router) {}

  ngOnInit() {
    this.userSerivce.users = this.userSerivce.retriveData('users', true) || [];
    this.userSerivce.currentuser = this.userSerivce.retriveData(
      'currentuser',
      true
    );
    if (this.userSerivce.currentuser) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
