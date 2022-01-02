import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Subject12 } from '../subject.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  name:any=[]
  tempName:any
  constructor(public subject:Subject12) {
    // this.subject.name.subscribe(name=>{
    //   console.log(name);
    //   this.name=name
    // })
   }

  ngOnInit(): void {
    
  }
  onSubmit(form:any){
    // console.log(form);
    this.name.push(form)
    // console.log(this.name);
    
    this.subject.name.next(this.name)
    }

}
