import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
onSignup(email:any,password:any){
this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKi4S8B8D4NrxHwYhbUYtENyNjZTFH47k',{
  email:email,
  password:password,
  returnSeecureToken:true
}).subscribe(data=>{
  console.log(data);
  
})
}
onLogin(email:any,password:any){
  this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKi4S8B8D4NrxHwYhbUYtENyNjZTFH47k',{
    email:email,
    password:password
  })
  .subscribe(data=>{
    console.log(data);
    
  })
}
}
