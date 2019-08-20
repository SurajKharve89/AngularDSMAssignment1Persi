import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/components/home/home.component';
import { DisplayNotFoundComponent } from 'app/components/display-not-found/display-not-found.component';
import { EmployeesComponent } from 'app/components/employees/employees.component';
import { EmployeeDetailsComponent } from 'app/components/employee-details/employee-details.component';
import { EmployeeResumeComponent } from 'app/components/employee-resume/employee-resume.component';
import { EmployeeService } from 'app/services/employee.service';
import {FilterByNamePipe} from 'app/pipes/employee-name.filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayNotFoundComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeResumeComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
