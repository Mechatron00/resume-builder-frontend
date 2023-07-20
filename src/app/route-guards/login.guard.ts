import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login/login.service';
import { AuthServiceService } from '../login/login/auth-service.service';


@Injectable({
  providedIn: 'root'
})

export class loginGuard implements CanActivate,  CanLoad {

  constructor(private authService: AuthServiceService,
    private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn()?true:this.router.navigate(['welcome']);
  }

  canLoad
  (
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean 
    {
      return this.authService.isLoggedIn();

    }

 
  
}