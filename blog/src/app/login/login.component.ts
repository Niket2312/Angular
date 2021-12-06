import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild ('f') login!:NgForm
isUsername:boolean = true;
isEmail:boolean = false;
val!:String;
onSubmit(){

}
onChangeInput(value1: any){
  this.val=value1.target.value
  if(this.val=='username'){
    this.isUsername=true;
    this.isEmail=false
  }else if(this.val=='Email'){
    this.isEmail=true;
    this.isUsername=false
  }else{
    
  }
}
  constructor() { }
  ngOnInit(): void {
  }

}


