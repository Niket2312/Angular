import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login/login.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string="";
  constructor(private loginservice:Login,private router:Router) {
   }

  ngOnInit(): void {
    this.username=this.loginservice.uNameis;
  }

}
 

