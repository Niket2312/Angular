import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginservice:Login,private router: Router) { }

  ngOnInit(): void {
  }
  validation(username: any,password:any){
    var username=username.value;
    var password=password.value;
    this.loginservice.uNameis=username;
    this.router.navigate(['job']);
    console.log(this.loginservice.uNameis);
  }

}
