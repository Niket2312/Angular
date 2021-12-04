import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeDataStoreService } from '../employee-data-store.service';
import { Employee } from '../employee.model';
import { employeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeRecords:Employee[];
  subsc;
  // subsc:Subscription;

  constructor(private employeeservice:employeeService,
    private employeeDataStoreService:EmployeeDataStoreService) { }

  ngOnInit(): void {
    this.subsc=this.employeeDataStoreService.getData().subscribe(
      (data)=>{
        this.employeeRecords=data;
        console.log(data)

      }
    )

    this.subsc = this.employeeservice.employeeAdd.subscribe(
      (employees: Employee[]) => {
        this.employeeRecords = employees;
      }
    )
  }

}
