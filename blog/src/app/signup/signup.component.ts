import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  
  constructor(private  formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-z][a-z]*[a-z]+$/),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^([a-z]*[A-Z]*)\d*@prominentpixel.com$/),
        ]),
        fullname: new FormControl('', [
          Validators.required,
          Validators.pattern(/^([a-z]*[A-Z]*)*$/),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ]),
        confirmpassword: new FormControl('', [Validators.required]),
      }, { 
        validator :this.mustMatch('password','confirmpassword')
      }
    );
    }
  }
