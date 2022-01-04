import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  getData:any
  sendData:any=[]
  constructor(public shareservice:ShareService) {
    this.shareservice.userInfo.subscribe(data=>{
      // console.log(data);
      this.getData=data
      console.log(this.getData);
    })
   }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    this.sendData.push(data);
    console.log(this.sendData);
    this.shareservice.userInfo.next(this.sendData)
    
  }
}
