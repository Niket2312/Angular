import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image='https://image.shutterstock.com/image-vector/s-brush-stroke-letter-logo-260nw-715074679.jpg'

  constructor(public modalservice:NgbModal) { }

  ngOnInit(): void {
  }
onLogin(){
let modalRef=this.modalservice.open(LoginComponent)
}
}
