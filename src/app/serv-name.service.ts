import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServNameService {
  private isLoggedin: boolean;

  constructor() { }

  public loggedInStatus() {
    // check if user logged in
    this.isLoggedin = true;
    return this.isLoggedin
  }
}

// To add service to application, use CLI (caps lock is customisable)
// ng g s SERVICENAME/ng generate service SERVICENAME

// In service file, we can add functions to confirm authentication