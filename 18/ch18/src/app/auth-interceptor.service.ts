import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { EmployeeDataStoreService } from './employee-data-store.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  {

  constructor(private employeeDataStoreService: EmployeeDataStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.employeeDataStoreService.employee.pipe(
      exhaustMap(() => {
        const modifiedReq = req.clone({
          params: new HttpParams().set('abc', 'abc'),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
