import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Example} from './example.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive';
  genders = ['male', 'female'];
  answers=['yes','no']
  signupForm!: FormGroup
  constructor(public example:Example) {}
  ngOnInit(){
    this.signupForm = new FormGroup({
      'username': new FormControl(null,[Validators.required]),
      'company':new FormControl(null,[Validators.required]),
      'city':new FormControl(null,[Validators.required]),
      'male':new FormControl(null),
      'female':new FormControl(null),
      'gender':new FormControl(null),
      'answers':new FormControl(null,[Validators.required]),
      'phone':new FormControl(null,[Validators.pattern(/^\+\d{3}-\d{2}-\d{3}/)]),
    })

  }
  onSubmit2(f:any)
  {
    this.example.getData(f)
    // console.log(gen);
    // this.example.getData(name,company,city,gen,answers,mobile)
  }
}
