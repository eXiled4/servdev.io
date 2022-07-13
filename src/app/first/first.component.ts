import { Component, OnInit } from '@angular/core';
import { ServNameService } from '../serv-name.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public isLoggedin:boolean=false; // injected isLoggedIn fx from ServNameService

  constructor(private serv:ServNameService) { }
    
  ngOnInit(): void {
    this.isLoggedin = this.serv.loggedInStatus();
  }

}
