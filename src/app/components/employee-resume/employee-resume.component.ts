import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-employee-resume',
  templateUrl: './employee-resume.component.html',
  styleUrls: ['./employee-resume.component.scss']
})
export class EmployeeResumeComponent implements OnInit {
  employeeDetail: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeDetail = this.employeeService.getEmployeeDetails(id);
  }

}
