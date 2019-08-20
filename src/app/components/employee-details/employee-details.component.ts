import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute , ParamMap} from '@angular/router';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetail: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.employeeDetail = this.employeeService.getEmployeeDetails(id);
  }

}
