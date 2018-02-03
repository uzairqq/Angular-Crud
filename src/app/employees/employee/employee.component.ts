import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService ) {}
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
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) {
    console.log('OnSubmit Method ' , form.value);
    this.employeeService.postEmployee(form.value)
    .subscribe(data => {
      this.resetForm(form);
      this.employeeService.getEmployeeList();
      this.toastr.success('New Record Added Successfully', 'Employee Register');
    });
  } else {
    this.employeeService.putEmployee(form.value.EmployeeID, form.value)
    .subscribe(data => {
      this.resetForm(form);
      this.employeeService.getEmployeeList();
      this.toastr.info('New Updated Successfully', 'Employee Register');
    });
  }
}

}
console.log();
