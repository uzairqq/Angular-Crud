import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: Employee) { }
  
  ngOnInit() {
  }

}
