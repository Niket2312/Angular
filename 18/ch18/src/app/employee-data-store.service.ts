import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from "@angular/common/http";
import { BehaviorSubject, Subject } from 'rxjs';
import { Employee } from './employee.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataStoreService{
  employee=new BehaviorSubject<Employee>(null);
  constructor(private http:HttpClient) { 
  }

  insertEmployeeData(data){
    return this.http.post(
      'https://ng-complete-guide-98042-default-rtdb.firebaseio.com/employees.json',
      data
    ).pipe(
      tap(
        ()=>{
          this.employee.next(data);
        }
      )
    )
  }

  getData(){
    return this.http.get(
      'https://ng-complete-guide-98042-default-rtdb.firebaseio.com/employees.json'
    )
    .pipe(
      map((responseData)=>{
        let responseArr = [];
        for(let key in responseData){
          responseArr.push({ ...responseData[key], id: key });
        }
        return responseArr;
      })
    );
  }


}
