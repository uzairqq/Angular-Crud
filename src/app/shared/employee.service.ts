import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  constructor(private http: Http) { }

  postCustomer(cust: Employee) {
    const body = JSON.stringify(cust);
    const headerOptions = new Headers({'ContentType' : 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    this.http.post('url', body, requestOptions );
  }

}
