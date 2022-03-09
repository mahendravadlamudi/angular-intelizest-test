import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // return true if you want to navigate, otherwise return false
    if (this.userService.currentuser) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
