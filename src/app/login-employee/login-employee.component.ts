import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {


    console.log(this.employee)
    this.employeeService.loginEmployee(this.employee).subscribe(data => {
      this.employee = data;
      if (data == null) alert("Unsuccessful");
      else {
        if (this.employee.approval === true) {
          alert("Login SuccessFull");

          if (this.employee.role === "admin")
            this.router.navigate(["employees", this.employee.department]);
          else if (this.employee.role === "superAdmin")
            this.router.navigate(["super-admin"]);
          else {
            this.router.navigate(["employee-details", this.employee.id]);
          }
        }
        else {
          alert("not yet approved by super admin");
        }
      }
    }, error => {
      console.log(error);
      alert("Unsuccessful");
    })
  }
}
