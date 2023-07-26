import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  employees!: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router) { }
  ngOnInit(): void {
    this.getEmployees();

  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
      console.log(this.employees)
    }, (error) => {
      console.log(error);
    })
  }
  approveEmployee(employee: Employee) {
    
    employee.approval = true;
    this.employeeService.updateEmployee(employee.id, employee).subscribe(error => console.log(error));

  }
  rejectEmployee(employee: Employee){
    this.employeeService.deleteEmployee(employee.id).subscribe(data => {
      console.log(data);
    })

  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details',id]);

  }


}
