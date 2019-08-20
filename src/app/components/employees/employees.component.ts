import { Component, OnInit } from '@angular/core';
import { MockDataEmployee } from 'app/components/employees/mock-data-employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeeList: any;
  searchFields: {
    name: string,
    country: string
  };
  filters: { name: string; country: string; };
  constructor() {
    this.searchFields = {name: '' , country: ''};
   }

  ngOnInit() {
    this.employeeList = MockDataEmployee.list;
  }

  updateFilters() {
    this.filters = Object.assign({} , this.searchFields);
  }
}
