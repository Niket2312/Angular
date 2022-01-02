import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Subject12 } from '../subject.service';
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  name:any
  fname=''
  surname2=''
  date=''
  tempName:any
  constructor(public subject:Subject12) {
    this.subject.name.subscribe(data=>{
      console.log(data);
      this.name=data
      for(let element of this.name){
        this.fname=element.name
        this.surname2=element.surname
        this.date=element.date
      }      
    })
   }

  ngOnInit(): void {
  
  }
  
  onSubmit(form:any){
    this.name=form.name
    console.log(this.name);

    }
}
