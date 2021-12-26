import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserName:boolean=true;
  isEmail:boolean=false;
  constructor(public router:Router,public route:ActivatedRoute,public loginservice:LoginService) { }

  ngOnInit(): void {
  }
  onChange(value:any){
    if(value=='username'){
      this.isUserName=true
      this.isEmail=false
    } else if(value=='email'){
      this.isUserName=false
      this.isEmail=true
    }
  }
  onSubmit(form:any){
    console.log(form.username);
    this.loginservice.getName(form.username)
    this.router.navigate(['blog'])
  }
}
