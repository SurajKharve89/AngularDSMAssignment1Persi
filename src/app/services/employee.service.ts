import { Injectable } from '@angular/core';
import { MockDataEmployee } from 'app/components/employees/mock-data-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: any;
  employeeDetails: any;

  constructor() {}

  getEmployeeDetails(id: string): any {
    this.employeeList = MockDataEmployee.list;
    this.employeeList.map((empList: any) => {
      if (empList.empID === id) {
        this.employeeDetails = empList;
      }
    });
    return this.employeeDetails;
  }
}
