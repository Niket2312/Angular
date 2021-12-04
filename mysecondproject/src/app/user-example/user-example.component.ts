import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-example',
  template: '<p style="color: rebeccapurple;">hi</p><p style="color: salmon;">Hello</p><p style="color: dodgerblue;">Hello world</p>',
  styleUrls: ['./user-example.component.css']
})
export class UserExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
