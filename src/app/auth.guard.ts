import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServNameService } from './serv-name.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private serv:ServNameService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if(!this.serv.loggedInStatus())
      return false; // lines 15-16 - if not igged in - return false - (deny access)
    
    else
      return true;
  }
  
}

// This session - we will be injecting services inside component - in this eg - the guard comp
// First we import the service
// Next, create a contructor, than privatise a new variable that will inherit from ServNameService
// We can code inside the canActivate method to test the service function

