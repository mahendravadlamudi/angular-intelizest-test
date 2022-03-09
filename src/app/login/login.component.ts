import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private userService: UserService) {}
  getLoginInfo() {
    console.log(this.loginForm.getRawValue());
    const currentuser = this.loginForm.getRawValue();
    const existUser = this.userService.users.find(
      (user) => user.username === currentuser.username
    );
    this.userService.currentuser = null;
    if (existUser) {
      if (existUser.pwdinfo !== currentuser.pwdinfo) {
        this.loginForm
          .get('pwdinfo')
          .setErrors({ invalidPassword: 'password is not correct' });
      } else {
        this.userService.currentuser = currentuser;
      }
    } else {
      this.userService.addUser(currentuser);
      this.userService.currentuser = currentuser;
    }
    if (this.userService.currentuser) {
      this.router.navigate(['/dashboard']);
      this.userService.storeData(
        'currentuser',
        this.userService.currentuser,
        true
      );
    }
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      pwdinfo: new FormControl('', [Validators.required]),
    });
  }

  resetForm() {
    console.log('resetForm');
    this.loginForm.reset();
  }
}
