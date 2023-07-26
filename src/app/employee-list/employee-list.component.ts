import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  department!: string;
  employees!: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router, private activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.department = this.activateRoute.snapshot.params['department']
    this.getEmployees();

  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data.filter((x) => x.department === this.department);
      console.log(this.employees)
    }, (error) => {
      console.log(error);
    })
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details',id]);

  }
  updateEmployee(Id: number) {
    console.log(Id)
    this.router.navigate(['update-employee',Id]);

  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })

  }



}

