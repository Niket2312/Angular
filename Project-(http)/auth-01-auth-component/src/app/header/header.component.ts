import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image='https://image.shutterstock.com/image-vector/s-brush-stroke-letter-logo-260nw-715074679.jpg'
  constructor() { }

  ngOnInit() {
  }

}
