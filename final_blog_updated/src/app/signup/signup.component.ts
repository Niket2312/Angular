import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators,AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup
  constructor(private formbuilder:FormBuilder,
    public router:Router,
    public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
      fullname:new FormControl('',Validators.compose([Validators.required])),
      email:new FormControl('',Validators.compose([Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@prominentpixel.com$')])),
      username:new FormControl(
        '',
        Validators.compose([Validators.required,
          ])),
        password:new FormControl('',Validators.compose([Validators.required])),
        cpassword:new FormControl('',Validators.compose([Validators.required])),
    },
    {
      // validators:this.password.bind(this)
    }
    )
  }
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('confirmpassword');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }
  onSubmit(){
    this.router.navigate(['/login'], { relativeTo: this.route });

  }
}
