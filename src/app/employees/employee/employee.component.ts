import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset(); // for  form reset
     this.employeeService.selectedEmployee = { // for employee model reset
      EmoployeeID: null,
      FirstName: '',
      LastName: '',
      Position: '',
      EmpCode: '',
      Office: ''
    };
    console.log(form.value);
    }
  }
  onSubmit(form: NgForm) {
    console.log('OnSubmit Method ' , form.value);
    this.employeeService.postEmployee(form.value)
    .subscribe(data => {
      this.resetForm(form);
    });
  }

}
