import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Students.Services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private studentsService:StudentService) { }

  ngOnInit(): void {
  }
  addStudentData(studentName:any,School:any)
  {
    let studentname='';
    let schoolname='';
    let logintime=new Date();
    console.log(logintime);
    studentname=studentName.value;
    schoolname=School.value;
    console.log(studentname);
    console.log(schoolname);
    this.studentsService.addStudentData(studentname,schoolname,logintime);

  }
}