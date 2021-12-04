import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(public loginservice:LoginService,private router: Router) { }
  onSubmitData(id:any,pwd:any){
  //  this.loginservice.uname=id; 
  //  console.log(this.loginservice.uname);
   this.loginservice.getname(id);
   this.router.navigate(['jobs']);
  }
  ngOnInit(): void {
  }

}
