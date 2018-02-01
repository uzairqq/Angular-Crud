import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  listEmployee: Employee[];
  constructor(private http: Http) { }

  postEmployee(emp: Employee) {
    console.log('PostCustomer Method Befor Json Stringify' , emp);
    const body = JSON.stringify(emp);
    console.log('PostCustomer Method After Json Stringify' , body);
    const headerOptions = new Headers({'Content-Type' : 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:55538/api/Employees', body, requestOptions ).map(x => x.json());
  }

  getEmployeeList() {
    this.http.get('http://localhost:55538/api/Employees');
  }
}
