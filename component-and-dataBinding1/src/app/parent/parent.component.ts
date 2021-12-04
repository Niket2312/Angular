import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   colors =['red','red','red','purple','white'];
  
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}