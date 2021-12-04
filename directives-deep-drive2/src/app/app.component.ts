import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() public myObject =[
    {colour:'dodgerBlue',text:'1'},
    {colour:'coral',text:'2'},
    {colour:'orange',text:'3'},
    {colour:'yellow',text:'4'}
  ]

   
}
