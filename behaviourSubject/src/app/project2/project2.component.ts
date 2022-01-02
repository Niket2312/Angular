import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../behaviour.service';
@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {
  name:any=''
  constructor(public behaviourservice:BehaviourService) {
   this.behaviourservice.name.subscribe(name=>{
     this.name=name
   })
   }

  ngOnInit(): void {
  }
onSubmit(name:any){
  console.log(name);
  this.behaviourservice.name.next(this.name)
}
}
