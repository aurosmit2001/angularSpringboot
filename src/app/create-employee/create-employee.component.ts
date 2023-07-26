import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee: Employee =new Employee();
  constructor(private employeeService : EmployeeService, private router: Router){ }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe((data) =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
    
  }
  goToEmployeeList(){
    this.router.navigate(['/home']);

  }
  onSubmit(){
    // console.log(this.employee);
    this.saveEmployee();
    alert("Wait For Super-Admin to approve");
   
  }

}
