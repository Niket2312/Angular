import { Component, OnChanges, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:any;

  constructor(public loginservice:LoginService) { 
  }
  ngOnInit() {
    // this.data=this.loginservice.uname;
    // this.data= this.loginservice.uname;
  }

setuname(){
  this.data=this.loginservice.getname
  // console.log(this.loginservice.uname);

  console.log(this.data)
}




}
