import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  img = "https://image.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg"

  constructor(public loginservice:LoginService) { }

  ngOnInit(): void {
  }

}
