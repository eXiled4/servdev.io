import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServNameService {
  private isLoggedin: boolean;

  constructor() { }

  public loggedInStatus() {
    // this function check if user logged in
    this.isLoggedin = false; //This line shows the default state of the user
    return this.isLoggedin
  }
}

// To add service to application, use CLI (caps lock is customisable)
// ng g s SERVICENAME/ng generate service SERVICENAME

// In service file, we can add functions to confirm authentication