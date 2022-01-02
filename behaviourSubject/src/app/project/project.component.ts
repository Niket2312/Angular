import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../behaviour.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  name:any
  constructor(public behaviourservice:BehaviourService) { 
   this.behaviourservice.name.subscribe(name=>{
     this.name=name
   })
  }

  ngOnInit(): void {
  }
  onSubmit(f:any){
    console.log(f.name);
    this.name=f.name
    this.behaviourservice.name.next(this.name)
  }

}
