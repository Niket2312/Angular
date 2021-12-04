import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Students.Services';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student1:Array<any> = [];
  constructor(private studentsServices: StudentService) { }

  ngOnInit(): void {
    this.student1=this.studentsServices.students;
    console.log(this.student1);
  }

}