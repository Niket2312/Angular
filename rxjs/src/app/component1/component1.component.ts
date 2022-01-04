import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  data:any=[]
  getData:any
  constructor(public shareService:ShareService) { 
    this.shareService.userInfo.subscribe(userInfo =>{
      this.getData=userInfo
      
    })
  }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    this.data.push(data);
    console.log(this.data);
    this.shareService.userInfo.next(this.data)
  }
}
