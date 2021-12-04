import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oneWayBinding';
  firstName='Niket';
  hobbies:string='cricket'
  myFunction(){
    alert('Hello')
  }
  data1:string = ''
}
