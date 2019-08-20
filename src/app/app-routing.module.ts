import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';
import { DisplayNotFoundComponent } from 'app/components/display-not-found/display-not-found.component';
import { EmployeesComponent } from 'app/components/employees/employees.component';
import { EmployeeDetailsComponent } from 'app/components/employee-details/employee-details.component';
import { EmployeeResumeComponent } from './components/employee-resume/employee-resume.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'page-not-found', component: DisplayNotFoundComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: 'employee/resume/:id', component: EmployeeResumeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: DisplayNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
