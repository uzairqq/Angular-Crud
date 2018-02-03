import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Employee} from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;

  employeeList: Employee[];
  constructor(private http: Http) { }
  onSelect(hero: Employee): void {
    this.selectedEmployee = hero;
}
  postEmployee(emp: Employee) {
    console.log('PostCustomer Method Befor Json Stringify' , emp);
    const body = JSON.stringify(emp);
    console.log('PostCustomer Method After Json Stringify' , body);
    const headerOptions = new Headers({'Content-Type' : 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:64044/api/Employees', body, requestOptions ).map(x => x.json());
  }

  putEmployee(id, emp: Employee) {
    console.log('PostCustomer Method Befor Json Stringify' , emp);
    const body = JSON.stringify(emp);
    console.log('PostCustomer Method After Json Stringify' , body);
    const headerOptions = new Headers({'Content-Type' : 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    return this.http.put('http://localhost:64044/api/Employees/ ' + id ,
     body,
     requestOptions ).map(x => x.json());
  }


  getEmployeeList() {
    this.http.get('http://localhost:64044/api/Employees')
    .map((data: Response) => {
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.employeeList = x;
    });
  }
}
