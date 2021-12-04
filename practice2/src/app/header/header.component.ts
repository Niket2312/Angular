import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginservice: LoginService) { }
uname!: string ;
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.uname = this.loginservice.uname;
  }

}
