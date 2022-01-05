import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public modalservice:NgbModal,public http:HttpClient,private fb:FormBuilder) { }
  error:any=null
  ngOnInit(): void {
    
  }
  form=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  onSubmit(form:any)
  
  {
    this.modalservice.dismissAll();

    console.log(form);
     let formData=new FormData();
   formData.append('email',form.email)
   formData.append('password',form.password)
    this.http.post('http://103.86.16.120:8086/api/user/2/custom-login',formData,{
      headers:new HttpHeaders({'Authorization':'Barear null'}),
    })
    .subscribe(data =>{
      console.log(data);  
    })
  }
}



