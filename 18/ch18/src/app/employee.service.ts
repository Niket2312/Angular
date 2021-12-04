import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { EmployeeDataStoreService } from "./employee-data-store.service";
import { Employee } from "./employee.model";

@Injectable({providedIn: 'root'})

export class employeeService{
    employee : Employee[] = [];
    employeeAdd = new Subject;

    constructor(private employeedataStore:EmployeeDataStoreService){
      
    }
    // employeeAdd = new Subject<Employee[]>();
  
    addEmployee(employee: Employee){
      // this.employee.push(employee);
      // this.employeeAdd.next(this.employee);
      this.employeedataStore.insertEmployeeData(employee).subscribe(
        response => {
          console.log(response);
          this.employeedataStore.getData().subscribe(
            (responseData) => {
              // this.employeedataStore.next(responseData);
            }
          )
        }
      )
    }
}