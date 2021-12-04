import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employeeService } from '../employee.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  employeeForm: FormGroup;
  constructor(private employeeService:employeeService) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      'employeeName': new FormControl(null, [Validators.required, Validators.pattern(/^(([A-Z]\w+.?)\s([A-Z]\w[!@#\\$%\\^\\&*\\)\\(+=._-]*$))/)]),
      'company': new FormControl(null, Validators.required),
      'area': new FormControl('area1', Validators.required),
      'mobilenumber': new FormControl(null, 
        // [Validators.required, Validators.pattern(/^\+\d{3}-\d{2}-\d{3}/)]
        ),
      'isNewToCompany': new FormControl('yes'),
      'gender': new FormGroup({
        'male': new FormControl(),
        'female': new FormControl()
      })
    })
  }

  setGender(gendersObject: {male: boolean, female: boolean}){
    let gender = '';
    let count = 0;
    for(let key in gendersObject){
      if(gendersObject[key] === true){
        count++;
        gender = key;
      }
    }
    if(count == 0){
      alert("please select gender");
      return null;
    }
    if(count > 1){
      alert("please select only one gender");
      return null;
    }
    return gender;
  }

  onEmployeFormSubmit(){
    let employeeForm = this.employeeForm.value;
    const gender = this.setGender(employeeForm.gender);
    if(gender){
      employeeForm = { ...employeeForm, gender: gender};
      this.employeeService.addEmployee(employeeForm);
      // this.employeeForm.reset();
    }
  }

}
