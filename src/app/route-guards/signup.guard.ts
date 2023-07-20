import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login/login.service';
import { SignupService } from '../login/signup/signup.service';


@Injectable({
  providedIn: 'root'
})

export class signupGuard implements CanActivate,  CanLoad {

  constructor(private signupService: SignupService,
    private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.signupService.isSignup? true:this.router.navigate(['/signup']);
  }

  canLoad
  (
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean 
    {
      return this.signupService.isSignup;

    }

 
  
}