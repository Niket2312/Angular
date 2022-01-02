import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Subject12 } from '../subject.service';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(public subject:Subject12) {
    this.subject.name2.subscribe(name=>{
      this.name2=name
    })
  }
name=''
name2=''
tempName:any;
  ngOnInit(): void {
  }
onSubmit(form:any){
  console.log(form);
this.name=form.name
this.subject.name.next(form)

}
}
